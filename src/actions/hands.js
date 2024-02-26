import * as api from '../api';

export const dealStartingHands = () => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;

    // Deal two cards to player
    let res = await api.drawTwo(deckId);
    let data = res.data;
    dispatch({ type: 'DEAL_PLAYER_HAND', payload: data });

    // Deal two cards to dealer
    res = await api.drawTwo(deckId);
    data = res.data;
    dispatch({ type: 'DEAL_DEALER_HAND', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const dealPlayer = (deckId) => async (dispatch, getState) => {
  try {
    const { deckId } = await getState().deck;
    const { data } = await api.drawOne(deckId);
    console.log(data);
    dispatch({ type: 'DEAL_PLAYER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
