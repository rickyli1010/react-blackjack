import * as api from '../api';
import { calculateScore, checkHands } from '../utils/gameUtil';
import {
  UPDATE_REMAIN,
  DEAL_PLAYER_HAND,
  DEAL_DEALER_HAND,
  DEAL_PLAYER,
  DEAL_DEALER,
  PLAYERSCORE,
  DEALERSCORE
} from '../constants/actionTypes';

export const dealStartingHands = () => async (dispatch, getState) => {
  try {
    let deckState = await getState().deck;
    const deckId = deckState.deckId;
    let remaining = deckState.remaining;

    if (remaining === 1) {
      dispatch(dealPlayer());
      await api.returnPileToDeck(deckId);
      await api.shuffle(deckId);
      dispatch(dealPlayer());
      dispatch(calculateDealerScore());
    } else {
      if (remaining === 0) {
        await api.returnPileToDeck(deckId);
        await api.shuffle(deckId);
      }

      // Deal two cards to player
      const res = await api.drawTwo(deckId);
      const data = res.data;
      dispatch({ type: DEAL_PLAYER_HAND, payload: data });
      dispatch({ type: UPDATE_REMAIN, payload: data });
      dispatch(calculatePlayerScore());
    }

    deckState = await getState().deck;
    remaining = deckState.remaining;

    if (remaining === 1) {
      dispatch(dealDealer());
      await api.returnPileToDeck(deckId);
      await api.shuffle(deckId);
      dispatch(dealDealer());
      dispatch(calculateDealerScore());
    } else {
      if (remaining === 0) {
        await api.returnPileToDeck(deckId);
        await api.shuffle(deckId);
      }

      // Deal two cards to dealer
      let response = await api.drawTwo(deckId);
      let myData = response.data;
      dispatch({ type: DEAL_DEALER_HAND, payload: myData });
      dispatch({ type: UPDATE_REMAIN, payload: myData });
      dispatch(calculateDealerScore());

      // Get another two cards if they are the same (API issue)
      const { dealerHand, playerHand } = await getState().hands;
      if (checkHands(dealerHand, playerHand)) {
        response = await api.drawTwo(deckId);
        myData = response.data;
        dispatch({ type: DEAL_DEALER_HAND, payload: myData });
        dispatch({ type: UPDATE_REMAIN, payload: myData });
        dispatch(calculateDealerScore());
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const dealPlayer = () => async (dispatch, getState) => {
  try {
    const { deckId, remaining } = await getState().deck;

    // Check if any card remains
    if (remaining === 0) {
      await api.returnPileToDeck(deckId);
      await api.shuffle(deckId);
    }
    const { data } = await api.drawOne(deckId);
    dispatch({ type: DEAL_PLAYER, payload: data });
    dispatch(calculatePlayerScore());
    dispatch({ type: UPDATE_REMAIN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const dealDealer = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    const { data } = await api.drawOne(deckId);
    dispatch({ type: DEAL_DEALER, payload: data });
    dispatch(calculateDealerScore());
  } catch (error) {
    console.log(error.message);
  }
};

export const calculatePlayerScore = () => async (dispatch, getState) => {
  try {
    const { playerHand } = await getState().hands;
    const score = calculateScore(playerHand);
    dispatch({ type: PLAYERSCORE, payload: score });
  } catch (error) {
    console.log(error);
  }
};

export const calculateDealerScore = () => async (dispatch, getState) => {
  try {
    const { dealerHand } = await getState().hands;
    const score = calculateScore(dealerHand);
    dispatch({ type: DEALERSCORE, payload: score });
  } catch (error) {
    console.log(error);
  }
};
