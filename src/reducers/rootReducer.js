import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import drinkReducer from './drinkReducer'
import draughtsReducer from './draughtsReducer'
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers(
    {
        placeState: placeReducer, 
        drinkState: drinkReducer, 
        draughtsState: draughtsReducer,
        sessionState: sessionReducer,
        userState: userReducer
    });

export default rootReducer;