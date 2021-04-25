import axios from 'axios';
import { DRINK_API_ERROR, DRINK_API_SUCCESS, DRINK_API_REQUEST } from '../types/drinkTypes';
import { DRINK_ENDPOINT, WAT_API_URI } from '../../constants';
import { arrayToObjectById } from '../../helpers';

export const getDrinks = () => {
    return async function(dispatch) {
        try {
            dispatch({type: DRINK_API_REQUEST})
            const res = await axios.get(`${WAT_API_URI}${DRINK_ENDPOINT}`);
            dispatch(gotDrinks(res.data.drinks));
        } catch (e) {
            dispatch({type: DRINK_API_ERROR, error: e.response.data.error.message})
        }
    }
}

function gotDrinks(drinks) {
    return { type: DRINK_API_SUCCESS, payload: arrayToObjectById(drinks) };
}

export const getDrink = (id) => {
    return async function(dispatch) {
        try {
            dispatch({type: DRINK_API_REQUEST});
            const res = await axios.get(`${WAT_API_URI}${DRINK_ENDPOINT}${id}`);
            dispatch(gotDrink(res.data.drink));
        } catch(e) {
            dispatch({type: DRINK_API_ERROR, error: e.response.data.error.message})
        }
    }
}

function gotDrink(drink) {
    return {type: DRINK_API_SUCCESS, payload: {[drink.id]: {...drink }}};
}