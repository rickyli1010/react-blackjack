// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = { playerHand: [], dealerHand: [], playerScore: 0, dealerScore: 0 },
  action
) => {
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
    case 'DEAL_DEALER':
      return {
        ...state,
        dealerHand: [...state.dealerHand, action.payload.cards[0]]
      };
    case 'PLAYERSCORE':
      return {
        ...state,
        playerScore: action.payload
      };
    case 'DEALERSCORE':
      return {
        ...state,
        dealerScore: action.payload
      };
    case 'RESET_HANDS': {
      return { state, dealerHand: [], playerHand: [] };
    }
    default:
      return state;
  }
};
