import * as api from '../api';
import { calculateScore } from '../utils/gameUtil';

export const dealStartingHands = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;

    // Deal two cards to player
    let res = await api.drawTwo(deckId);
    let data = res.data;
    dispatch({ type: 'DEAL_PLAYER_HAND', payload: data });
    dispatch(calculatePlayerScore());

    // Deal two cards to dealer
    res = await api.drawTwo(deckId);
    data = res.data;
    dispatch({ type: 'DEAL_DEALER_HAND', payload: data });
    dispatch(calculateDealerScore());
  } catch (error) {
    console.log(error.message);
  }
};

export const dealPlayer = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    const { data } = await api.drawOne(deckId);
    dispatch({ type: 'DEAL_PLAYER', payload: data });
    dispatch(calculatePlayerScore());
  } catch (error) {
    console.log(error.message);
  }
};

export const dealDealer = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    const { data } = await api.drawOne(deckId);
    dispatch({ type: 'DEAL_DEALER', payload: data });
    dispatch(calculateDealerScore());
  } catch (error) {
    console.log(error.message);
  }
};

export const calculatePlayerScore = () => async (dispatch, getState) => {
  try {
    const { playerHand } = await getState().hands;
    const score = calculateScore(playerHand);
    dispatch({ type: 'PLAYERSCORE', payload: score });
  } catch (error) {
    console.log(error);
  }
};

export const calculateDealerScore = () => async (dispatch, getState) => {
  try {
    const { playerHand } = await getState().hands;
    const score = calculateScore(playerHand);
    dispatch({ type: 'DEALERSCORE', payload: score });
  } catch (error) {
    console.log(error);
  }
};
