import { combineReducers } from 'redux';
import { bankReducer } from './bankReducer';

export const reducers = combineReducers({
  bank: bankReducer
});

// ReturnType interprets whatever type we pass in <> like in this case, we pass the typeof reducers above
export type State = ReturnType<typeof reducers>;
