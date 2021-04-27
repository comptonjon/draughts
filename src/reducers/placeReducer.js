import { PLACE_API_ERROR, PLACE_API_SUCCESS, PLACE_API_REQUEST, PLACE_API_INITIAL_LOAD_SUCCESS } from '../actions/types/placeTypes';
import { RESET } from '../actions/types/globalTypes';

const INITIAL_STATE = { requests: 0, error: null, places: {}, initialLoad: false};

const placeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case PLACE_API_REQUEST:
            return { ...state, requests: state.requests + 1, error: null };
        case PLACE_API_INITIAL_LOAD_SUCCESS:
            return { ...state, requests: state.requests - 1, places: {...action.payload}, initialLoad: true};
        case PLACE_API_SUCCESS:
            return { ...state, requests: state.requests - 1, places: { ...state.places, ...action.payload } };
        case PLACE_API_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error }
        case RESET:
            return INITIAL_STATE;
        default: 
            return state;
    }
};

export default placeReducer;