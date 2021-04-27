import {DRAUGHT_API_REQUEST, DRAUGHT_INITIAL_LOAD_SUCCESS, DRAUGHT_API_ERROR } from '../actions/types/draughtTypes';
import { RESET } from '../actions/types/globalTypes';

const INITIAL_STATE = { initialLoad: false, requests: 0, error: null, draughts: []};

const draughtReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DRAUGHT_API_REQUEST:
            return { ...state, requests: state.requests + 1, error: null}
        case DRAUGHT_INITIAL_LOAD_SUCCESS:
            return { ...state, requests: state.requests - 1, initialLoad: true, draughts: action.draughts};
        case DRAUGHT_API_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error };
        case RESET:
            return INITIAL_STATE;
        default: 
            return state;
    }
}

export default draughtReducer;