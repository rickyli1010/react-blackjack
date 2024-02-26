// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { playerHand: [], dealerHand: [] }, action) => {
  switch (action.type) {
    case 'DEAL_PLAYER_HAND':
      return { ...state, playerHand: action.payload.cards };
    case 'DEAL_DEALER_HAND':
      return { ...state, dealerHand: action.payload.cards };
    case 'DEAL_PLAYER':
      return {
        ...state,
        playerHand: [...state.playerHand, action.payload.cards[0]]
      };
    default:
      return state;
  }
};
