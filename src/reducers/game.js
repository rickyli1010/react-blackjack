import {
  DEALER_WIN,
  PLAYER_WIN,
  PUSH,
  WINNER_RESET
} from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { winner: '' }, action) => {
  switch (action.type) {
    case DEALER_WIN:
      return { ...state, winner: 'You Lose!' };
    case PLAYER_WIN:
      return { ...state, winner: 'You Win!' };
    case PUSH:
      return { ...state, winner: 'You Lose!' };
    case WINNER_RESET:
      return { ...state, winner: '' };
    default:
      return state;
  }
};
