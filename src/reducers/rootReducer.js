import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import drinkReducer from './drinkReducer'

const rootReducer = combineReducers({placeState: placeReducer, drinkState: drinkReducer});

export default rootReducer;