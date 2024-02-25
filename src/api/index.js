import axios from 'axios';

const API = axios.create({ baseURL: 'https://deckofcardsapi.com/api/deck' });

export const newDeck = () => API.get(`/new/shuffle/?deck_count=1`);
export const shuffleAll = (deckId) => API.get(`/${deckId}/shuffle/`);
export const shuffle = (deckId) =>
  API.get(`/${deckId}/shuffle/?remaining=true`);
