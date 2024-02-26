import * as api from '../api';
import { dealStartingHands } from './hands';

export const startGame = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    console.log('deck', deckId);

    if (!deckId) {
      console.log('no id');
      // const { data } = api.newDeck();
      dispatch({
        type: 'NEW_DECK',
        payload: { deck_id: '9dvj4zhacnn4' }
      });
    } else {
      const { data } = await api.shuffleAll(deckId);
      dispatch({ type: 'SHUFFLE_ALL', payload: data });
      console.log(data);
    }
    dispatch(dealStartingHands());
    dispatch({ type: 'WINNER_RESET' });
  } catch (error) {
    console.log(error.message);
  }
};

export const shuffleAll = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    const { data } = await api.shuffleAll(deckId);
    dispatch({ type: 'SHUFFLE_ALL', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
