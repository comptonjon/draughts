import { PLACE_API_ERROR, PLACE_API_SUCCESS, PLACE_API_REQUEST } from '../actions/types/placeTypes';
const INITIAL_STATE = { requests: 0, error: null, places: {}};

const placeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case PLACE_API_REQUEST:
            return { ...state, requests: state.requests + 1, error: null };
        case PLACE_API_SUCCESS:
            return { ...state, requests: state.requests - 1, places: { ...state.places, ...action.payload } };
        case PLACE_API_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error }
        default: 
            return state;
    }
};

export default placeReducer;