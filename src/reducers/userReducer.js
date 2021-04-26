import { USER_API_REQUEST, USER_INITIAL_LOAD_SUCCESS, USER_API_SUCCESS, USER_API_ERROR } from '../actions/types/userTypes'
const INITIAL_STATE = { requests: 0, error: null, users: {}, initialLoad: false};

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_API_REQUEST:
            return { ...state, error: null, requests: state.requests + 1};
        case USER_INITIAL_LOAD_SUCCESS:
            return { ...state, requests: state.requests - 1, users: {...action.payload}, initialLoad: true};
        case USER_API_SUCCESS:
            return { ...state, requests: state.requests - 1, users: { ...action.users, ...action.payload }}
        case USER_API_ERROR:
            return { ...state, error: action.error, requests: state.requests - 1}
        default:
            return state;
    }
};

export default userReducer;

