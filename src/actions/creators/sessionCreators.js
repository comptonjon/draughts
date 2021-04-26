import axios from 'axios';
import { SESSION_API_REQUEST, SESSION_API_AUTH_SUCCESS, SESSION_API_ERROR } from '../types/sessionTypes';
import jwtDecode from 'jwt-decode';
import { WAT_API_URI, REGISTER_ENDPOINT, LOGIN_ENDPOINT } from '../../constants';

export const registerUser = (userData) => {
    return async function(dispatch) {
        try {
            dispatch({type: SESSION_API_REQUEST});
            const res = await axios.post(`${WAT_API_URI}${REGISTER_ENDPOINT}`, userData);
            dispatch(authenticatedUser(res.data.token));
        } catch (e) {
            const error = e.response.data.error.message || "ERROR REGISTERING USER"
            dispatch({type: SESSION_API_ERROR, error})
        }
    }
}

function authenticatedUser(token) {
    const user = jwtDecode(token);
    return { type: SESSION_API_AUTH_SUCCESS, user, token }
}

export const loginUser = ({username, password}) => {
    return async function(dispatch) {
        try {
            alert(username)
            dispatch({type: SESSION_API_REQUEST});
            const res = await axios.post(`${WAT_API_URI}${LOGIN_ENDPOINT}`, {username, password});
            dispatch(authenticatedUser(res.data.token));
        } catch (e) {
            const error = e.response.data.error.message || "ERROR AUTHENTICATING USER"
            dispatch({type: SESSION_API_ERROR, error})
        }
        

    }
 }