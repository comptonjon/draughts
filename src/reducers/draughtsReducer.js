import { 
    DRAUGHT_API_ERROR, 
    DRAUGHT_API_REQUEST, 
    DRAUGHT_API_DRINK_SUCCESS, 
    DRAUGHT_API_PLACE_SUCCESS 
} from '../actions/types/draughtTypes';

const INITIAL_STATE = { requests: 0, error: null, places: {}, drinks: {}};

const draughtsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DRAUGHT_API_REQUEST:
            return { ...state, requests: state.requests + 1, error: null };
        case DRAUGHT_API_DRINK_SUCCESS:
            return { ...state, requests: state.requests - 1, drinks: { ...state.drinks, [action.drink]: [...action.draughts] } };
        case DRAUGHT_API_PLACE_SUCCESS:
            return { ...state, requests: state.requests - 1, places: { ...state.places, [action.place]: { draughts: [...action.draughts], timeUpdated: Date.now() }} };
        case DRAUGHT_API_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error };
        default:
            return state;
    }
}

export default draughtsReducer;
