import { combineReducers } from 'redux';
import placeReducer from './placeReducer';

const rootReducer = combineReducers({placeState: placeReducer});

export default rootReducer;