import { DRINK_API_ERROR, DRINK_API_SUCCESS, DRINK_API_REQUEST, DRINK_API_INITAL_LOAD_SUCCESS } from '../actions/types/drinkTypes';
const INITIAL_STATE = { requests: 0, error: null, drinks: {}, initialLoad: false};

const drinkReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DRINK_API_REQUEST:
            return { ...state, requests: state.requests + 1, error: null };
        case DRINK_API_INITAL_LOAD_SUCCESS:
            return { ...state, requests: state.requests - 1, initialLoad: true, drinks: { ...action.payload } };
        case DRINK_API_SUCCESS:
            return { ...state, requests: state.requests - 1, drinks: { ...state.drinks, ...action.payload } };
        case DRINK_API_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error }
        default: 
            return state;
    }
};

export default drinkReducer;