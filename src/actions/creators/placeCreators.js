import axios from 'axios';
import { PLACE_API_ERROR, PLACE_API_SUCCESS, PLACE_API_REQUEST } from '../types/placeTypes';
import { PLACE_ENDPOINT, WAT_API_URI } from '../../constants';
import { arrayToObjectById } from '../../helpers';

export const getPlaces = () => {
    return async function(dispatch) {
        try {
            dispatch({type: PLACE_API_REQUEST})
            const res = await axios.get(`${WAT_API_URI}${PLACE_ENDPOINT}`);
            dispatch(gotPlaces(res.data.places));
        } catch (e) {
            dispatch({type: PLACE_API_ERROR, error: e.response.data.error.message})
        }
    }
}

function gotPlaces(places) {
    return { type: PLACE_API_SUCCESS, payload: arrayToObjectById(places) };
}