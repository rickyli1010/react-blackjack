import { dealStartingHands } from './hands';
import { shuffleAll } from './deck';
import { getPileString } from '../utils/gameUtil';
import {
  NEW_DECK,
  DEALER_WIN,
  PLAYER_WIN,
  PUSH,
  WINNER_RESET,
  RESET_HANDS
} from '../constants/actionTypes';
import * as api from '../api';

export const startGame = () => async (dispatch, getState) => {
  try {
    const { dealerHand, playerHand } = await getState().hands;

    if (dealerHand.legnth || playerHand.length) {
      // Restart existing game
      const { deckId } = await getState().deck;

      // discard cards to pile
      const { dealerHand, playerHand } = await getState().hands;
      const pileStr = getPileString(dealerHand, playerHand);
      await api.discardCards(deckId, pileStr);
      dispatch({ type: WINNER_RESET });
      dispatch({ type: RESET_HANDS });
      dispatch(dealStartingHands());
    } else {
      // New game
      const { deckId } = await getState().deck;

      // New Deck
      if (!deckId) {
        const { data } = await api.newDeck();
        dispatch({
          type: NEW_DECK,
          payload: data
        });
        dispatch(dealStartingHands());
      } else {
        dispatch(shuffleAll());
        dispatch({ type: WINNER_RESET });
        dispatch({ type: RESET_HANDS });
        dispatch(dealStartingHands());
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const playerStand = () => async (dispatch) => {
  try {
    dispatch(calculateResult());
  } catch (error) {
    console.log(error.message);
  }
};

export const calculateResult = () => async (dispatch, getState) => {
  const { playerScore, dealerScore } = await getState().hands;
  if (playerScore > 21) {
    dispatch({ type: DEALER_WIN });
  } else if (dealerScore > 21) {
    dispatch({ type: PLAYER_WIN });
  } else if (playerScore === dealerScore) {
    dispatch({ type: PUSH });
  } else if (playerScore > dealerScore) {
    dispatch({ type: PLAYER_WIN });
  } else {
    dispatch({ type: DEALER_WIN });
  }
};
