import { combineReducers } from 'redux';
import hands from './hands';
import deck from './deck';

export const reducers = combineReducers({ hands, deck });
