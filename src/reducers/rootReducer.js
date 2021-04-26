import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import drinkReducer from './drinkReducer'
import draughtsReducer from './draughtsReducer'
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import placeRatingsReducer from './placeRatingsReducer';
import drinkRatingsReducer from './drinkRatingsReducer';
import ownerReducer from './ownerReducer';

const rootReducer = combineReducers(
    {
        placeState: placeReducer, 
        drinkState: drinkReducer, 
        draughtsState: draughtsReducer,
        sessionState: sessionReducer,
        userState: userReducer,
        placeRatingsState: placeRatingsReducer,
        drinkRatingsState: drinkRatingsReducer,
        ownerState: ownerReducer
    });

export default rootReducer;