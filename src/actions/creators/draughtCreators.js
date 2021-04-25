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
            dispatch(gotPlaceDraughts(res.data.draughts));
        } catch(e) {
            dispatch({type: DRAUGHT_API_ERROR, error: e.response.status})
        }
    }
};

function gotPlaceDraughts(draughts) {
    return { type: DRAUGHT_API_PLACE_SUCCESS, draughts }
};

export function getDrinkDraughts(id) {
    return async function(dispatch) {
        try {
            dispatch({type: DRAUGHT_API_REQUEST });
            const res = await axios.get(`${WAT_API_URI}${DRINK_ENDPOINT}${id}/${DRAUGHTS_ENDPOINT}`);
            dispatch(gotDrinkDraughts(res.data.draughts));
        } catch (e) {
            if (e.response) {
                console.log(e.response);
                dispatch({type: DRAUGHT_API_ERROR, error: "ERROR" })
            } else {
                dispatch({type: DRAUGHT_API_ERROR, error: "Error fetching draught list"});
            }
        }
    }
}

function gotDrinkDraughts(draughts) {
    return { type: DRAUGHT_API_DRINK_SUCCESS, draughts}
}