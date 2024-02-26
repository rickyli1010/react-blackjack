// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { playerHand: [], dealerHand: [] }, action) => {
  switch (action.type) {
    case 'DEAL_PLAYER_HAND':
      return { ...state, playerHand: action.payload.cards };
    case 'DEAL_DEALER_HAND':
      return { ...state, dealerHand: action.payload.cards };
    default:
      return state;
  }
};
