import { OWNERSHIP_API_REQUEST, OWNERSHIP_INITIAL_LOAD_SUCCESS, OWNERSHIP_API_SUCCESS, OWNERSHIP_API_ERROR } from '../actions/types/ownershipTypes'
const INITIAL_STATE = { requests: 0, initialLoad: false, error: null, owners: []};
const ownerReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case OWNERSHIP_API_REQUEST:
            return { ...state, requests: state.requests + 1, error: null }
        case OWNERSHIP_INITIAL_LOAD_SUCCESS:
            return { ...state, requests: state.requests - 1, owners: action.owners, initialLoad: true }
        case OWNERSHIP_API_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error };
        default:
            return state;
    }
};

export default ownerReducer;