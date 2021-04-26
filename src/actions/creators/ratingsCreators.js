import { PLACE_RATING_ERROR, PLACE_RATING_INITIAL_LOAD_SUCCESS, PLACE_RATING_API_REQUEST } from '../types/placeRatingTypes'
import { DRINK_RATING_API_REQUEST, DRINK_RATING_INITIAL_LOAD_SUCCESS, DRINK_RATING_API_SUCCESS, DRINK_RATING_API_ERROR } from '../types/drinkRatingTypes'
import { WAT_API_URI } from '../../constants';
import axios from 'axios';

export const getPlaceRatings = () => {
    return async function(dispatch) {
        try{
            dispatch({type: PLACE_RATING_API_REQUEST});
            const res = await axios.get(`${WAT_API_URI}rating/place`);
            dispatch(gotPlaceRatings(res.data.place_ratings))
        } catch(e) {
            dispatch({type: PLACE_RATING_ERROR, error: "ERROR FETCHING RATINGS"})
        }
    }
}

function gotPlaceRatings(ratings) {
    return { type: PLACE_RATING_INITIAL_LOAD_SUCCESS, ratings };
}

export const getAllDrinkRatings = () => {
    return async function(dispatch) {
        try {
            dispatch({type: DRINK_RATING_API_REQUEST})
            const res = await axios.get(`${WAT_API_URI}rating/drink`);
            dispatch(gotAllDrinkRatings(res.data.drink_ratings));
        } catch (e) {
            dispatch({type: DRINK_RATING_API_ERROR, error: "ERROR FETCHING DRINK RESULTS"})
        }
    }
}

function gotAllDrinkRatings(ratings) {
    return { type: DRINK_RATING_INITIAL_LOAD_SUCCESS, ratings }
}