import * as api from '../api';

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
  } catch (error) {
    console.log(error.message);
  }
};

export const shuffleAll = (id) => async (dispatch, getState) => {
  try {
    const { data } = await api.shuffleAll(id);
    dispatch({ type: 'SHUFFLE_ALL', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
