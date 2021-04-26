import axios from 'axios';
import { USER_API_REQUEST, USER_API_SUCCESS, USER_INITIAL_LOAD_SUCCESS, USER_API_ERROR } from '../types/userTypes';
import { arrayToObjectById } from '../../helpers';
import { WAT_API_URI, USER_ENDPOINT } from '../../constants';

export const getAllUsers = () => {
    return async function(dispatch) {
        try {
            dispatch({type: USER_API_REQUEST});
            const res = await axios.get('http://localhost:3030/api/user');
            dispatch(gotAllUsers(res.data.users));
        } catch (e) {
            console.log(e);
            dispatch({type: USER_API_ERROR, error: "ERROR FETCHING USERS"});
        }
    }
}

function gotAllUsers(users) {
    return { type: USER_INITIAL_LOAD_SUCCESS, payload: arrayToObjectById(users)};
}
