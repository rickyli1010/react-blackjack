import * as api from '../api';

export const dealStartingHands = (deckId) => async (dispatch) => {
  try {
    // Deal two cards to player
    let res = await api.drawTwo(deckId);
    let data = res.data;
    dispatch({ type: 'DEAL_PLAYER_HAND', payload: data });

    // Deal two cards to dealer
    res = await api.drawTwo(deckId);
    data = res.data;
    dispatch({ type: 'DEAL_DEALER_HAND', payload: data });

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
