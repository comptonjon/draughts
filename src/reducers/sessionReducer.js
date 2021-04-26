import {
    SESSION_API_REQUEST, 
    SESSION_API_AUTH_SUCCESS, 
    SESSION_API_ERROR,
    SESSION_LOG_OUT 
} from '../actions/types/sessionTypes';

const INITIAL_STATE = { user: null, requests: 0, error: null, token: null };

const sessionReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SESSION_API_REQUEST:
            return { ...state, requests: state.requests + 1, error: null};
        case SESSION_API_AUTH_SUCCESS:
            return { ...state, requests: state.requests - 1, user: action.user, token: action.token};
        case SESSION_API_ERROR:
            return { ...state, error: action.error, requests: state.requests - 1}
        case SESSION_LOG_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default sessionReducer;