import { combineReducers } from 'redux';
import hands from './hands';
import deck from './deck';
import game from './game';

export const reducers = combineReducers({ hands, deck, game });
