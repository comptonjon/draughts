import { 
    DRAUGHT_API_REQUEST, 
    DRAUGHT_API_PLACE_SUCCESS, 
    DRAUGHT_API_DRINK_SUCCESS, 
    DRAUGHT_API_ERROR 
} from '../types/draughtTypes';

import axios from 'axios';

import { 
    WAT_API_URI, 
    DRINK_ENDPOINT, 
    PLACE_ENDPOINT, 
    DRAUGHTS_ENDPOINT 
} from '../../constants';


export const getPlaceDraughts = (id) => {
    return async function(dispatch) {
        try {
            dispatch({type: DRAUGHT_API_REQUEST});
            const res = await axios.get(`${WAT_API_URI}${PLACE_ENDPOINT}${id}/${DRAUGHTS_ENDPOINT}`)
            dispatch(gotPlaceDraughts(id, res.data.draughts.drinks));
        } catch(e) {
            dispatch({type: DRAUGHT_API_ERROR, error: e.response.status})
        }
    }
};

function gotPlaceDraughts(place, draughts) {
    return { type: DRAUGHT_API_PLACE_SUCCESS, place, draughts}
}