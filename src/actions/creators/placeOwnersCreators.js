import axios from 'axios';
import { OWNERSHIP_API_REQUEST, OWNERSHIP_API_SUCCESS, OWNERSHIP_INITIAL_LOAD_SUCCESS, OWNERSHIP_API_ERROR } from '../types/ownershipTypes';
import { WAT_API_URI } from '../../constants';

export const getAllOwners = () => {
    return async function(dispatch) {
        try {
            dispatch({type: OWNERSHIP_API_REQUEST});
            const res = await axios.get(`${WAT_API_URI}owners`)
            dispatch(gotAllOwners(res.data.place_owners))
        } catch (e) {
            dispatch({ type: OWNERSHIP_API_ERROR, error: "ERROR FETCHING OWNERS"})
        }
        
    }
}

function gotAllOwners(owners) {
    return { type: OWNERSHIP_INITIAL_LOAD_SUCCESS, owners};
}