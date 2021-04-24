import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import drinkReducer from './drinkReducer'
import draughtsReducer from './draughtsReducer'

const rootReducer = combineReducers(
    {
        placeState: placeReducer, 
        drinkState: drinkReducer, 
        draughtsState: draughtsReducer
    });

export default rootReducer;