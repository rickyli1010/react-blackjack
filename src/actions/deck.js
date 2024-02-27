import * as api from '../api';
import { getPileString } from '../utils/gameUtil';

export const shuffleAll = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    await api.shuffleAll(deckId);
  } catch (error) {
    console.log(error.message);
  }
};

export const shuffle = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    await api.shuffle(deckId);
  } catch (error) {
    console.log(error.message);
  }
};

export const discardPile = () => async (dispatch, getState) => {
  const { deckId } = await getState().deck;
  const { dealerHand, playerHand } = await getState().hands;
  const pileStr = getPileString(dealerHand, playerHand);
  await api.discardCards(deckId, pileStr);
};
