import { 
    DRAUGHT_API_REQUEST, 
    DRAUGHT_API_PLACE_SUCCESS, 
    DRAUGHT_API_DRINK_SUCCESS, 
    DRAUGHT_API_ERROR, 
    DRAUGHT_INITIAL_LOAD_SUCCESS 
} from '../types/draughtTypes';

import axios from 'axios';

import { 
    WAT_API_URI, 
    DRINK_ENDPOINT, 
    PLACE_ENDPOINT, 
    DRAUGHTS_ENDPOINT 
} from '../../constants';


export const getAllDraughts = () => {
    return async function(dispatch) {
        try {
            dispatch({type: DRAUGHT_API_REQUEST});
            const res = await axios.get(`${WAT_API_URI}draught`);
            dispatch(gotAllDraughts(res.data.draughts));
        } catch (e) {
            dispatch({ type: DRAUGHT_API_ERROR, error: "ERROR FETCHING DRAUGHTS"})
        }
    }
}

function gotAllDraughts(draughts) {
    console.log("DRAUGHTS", draughts)
    return { type: DRAUGHT_INITIAL_LOAD_SUCCESS, draughts }
}


export const getPlaceDraughts = (id) => {
    return async function(dispatch) {
        try {
            dispatch({type: DRAUGHT_API_REQUEST});
            const res = await axios.get(`${WAT_API_URI}${PLACE_ENDPOINT}${id}/${DRAUGHTS_ENDPOINT}`)
            dispatch(gotPlaceDraughts(res.data.draughts));
        } catch(e) {
            dispatch({type: DRAUGHT_API_ERROR, error: "ERROR"})
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

export const editPlaceDraught = (pid, did, active) => {
    return async function(dispatch) {
        try {
            //dispatch({type: DRAUGHT_API_REQUEST});
            alert(`${WAT_API_URI}${DRINK_ENDPOINT}${pid}/${DRAUGHTS_ENDPOINT}${did}?active=${active}`)
            const res = await axios.patch(`${WAT_API_URI}${PLACE_ENDPOINT}${pid}/${DRAUGHTS_ENDPOINT}${did}?active=${active}`);
            console.log(res);
        } catch(e) {
            alert('error');
        }
    }
    
}