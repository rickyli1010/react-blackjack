import * as api from '../api';
import { Cards } from '../types';

export const dealHands =
  (deckId: string) =>
  async (dispatch: (dispatch: { type: string; playload: Cards }) => void) => {
    try {
      const { data } = await api.drawTwo(deckId);
      console.log(data);
      dispatch({ type: 'DEAL_PlAYER_HAND', playload: data });
    } catch (error) {
      console.log(error);
    }
  };
