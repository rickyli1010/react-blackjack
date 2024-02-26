import * as api from '../api';
import { getPileString } from '../utils/gameUtil';

export const newDeck = () => async (dispatch, getState) => {
  try {
    // const { data } = api.newDeck();
    dispatch({
      type: 'NEW_DECK',
      payload: { deck_id: '9dvj4zhacnn4' }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const shuffleAll = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    const { data } = await api.shuffleAll(deckId);
    console.log('shuffleAll', data);
  } catch (error) {
    console.log(error.message);
  }
};

export const shuffle = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    const { data } = await api.shuffle(deckId);
    console.log(shuffle, data);
  } catch (error) {
    console.log(error.message);
  }
};

export const discardPile = () => async (dispatch, getState) => {
  const { deckId } = await getState().deck;
  const { dealerHand, playerHand } = getState().hands;
  const pileStr = getPileString(dealerHand, playerHand);
  const { data } = await api.discardCards(deckId, pileStr);
  console.log('discard', data);
};
