import * as api from '../api';
import { calculateScore, checkHands } from '../utils/gameUtil';

export const dealStartingHands = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;

    // Deal two cards to player
    const res = await api.drawTwo(deckId);
    const data = res.data;
    dispatch({ type: 'DEAL_PLAYER_HAND', payload: data });
    dispatch({ type: 'UPDATE_REMAIN', payload: data });
    dispatch(calculatePlayerScore());

    // Deal two cards to dealer
    let response = await api.drawTwo(deckId);
    let myData = response.data;
    console.log(myData);
    dispatch({ type: 'DEAL_DEALER_HAND', payload: myData });
    dispatch({ type: 'UPDATE_REMAIN', payload: myData });
    dispatch(calculateDealerScore());

    // Get another two cards if they are the same (API issue)
    const { dealerHand, playerHand } = await getState().hands;
    if (checkHands(dealerHand, playerHand)) {
      response = await api.drawTwo(deckId);
      myData = response.data;
      dispatch({ type: 'DEAL_DEALER_HAND', payload: myData });
      dispatch({ type: 'UPDATE_REMAIN', payload: myData });
      dispatch(calculateDealerScore());
    }

    const { remaining } = await getState().deck;
    console.log('remaining', remaining);
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
    dispatch({ type: 'UPDATE_REMAIN', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const dealDealer = () => async (dispatch, getState) => {
//   try {
//     const { deckId } = await getState().deck;
//     const { data } = await api.drawOne(deckId);
//     dispatch({ type: 'DEAL_DEALER', payload: data });
//     dispatch(calculateDealerScore());
//   } catch (error) {
//     console.log(error.message);
//   }
// };

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
    const { dealerHand } = await getState().hands;
    const score = calculateScore(dealerHand);
    dispatch({ type: 'DEALERSCORE', payload: score });
  } catch (error) {
    console.log(error);
  }
};
