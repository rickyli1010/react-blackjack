// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { deckId: '', remaining: 0 }, action) => {
  switch (action.type) {
    case 'NEW_DECK':
      return { ...state, deckId: action.payload.deck_id };
    case 'SHUFFLE_ALL':
      return { ...state, remaining: action.payload.remaining };
    default:
      return state;
  }
};
