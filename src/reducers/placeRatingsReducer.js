import { PLACE_RATING_API_REQUEST, PLACE_RATING_INITIAL_LOAD_SUCCESS, PLACE_RATING_API_SUCCESS, PLACE_RATING_ERROR } from '../actions/types/placeRatingTypes'
import placeDraughtsReducer from "./placeDraughtsReducer";

const INITIAL_STATE = { initialLoad: false, requests: 0, error: null, ratings: {}};

const placeRatingsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case PLACE_RATING_API_REQUEST:
            return { ...state, error: null, requests: state.requests + 1};
        case PLACE_RATING_INITIAL_LOAD_SUCCESS:
            return { ...state, initialLoad: true, requests: state.requests - 1, ratings: action.ratings};
        // case PLACE_RATING_API_SUCCESS:
        //     return { 
        //         ...state, 
        //         requests: state.requests - 1, 
        //         ratings: { 
        //             byPlace: {
        //                 ...state.ratings.byPlace, 
        //                 ...ratingByPlace(action.rating)
        //             }, 
        //             byUser: {
        //                 ...state.ratings.byUser, 
        //                 ...ratingByUser(action.rating)
        //             }
        //         }};
        case PLACE_RATING_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error };
        default: 
            return state;
    }
}

function placeRatingsPayloadToIdObjects(arr) {
    console.log(arr)
    let byPlace = {};
    let byUser = {};
    arr.forEach(r => {
        console.log(r.user_id)
        if (byPlace[r.place_id]) {
            byPlace[r.place_id].push(r);
            //byUser[r.user_id].push(r);
            console.log("first")
        } else {

            byPlace[r.place_id] = [r];
            byUser[r.user_id] = [r];
            console.log("second")
        }
    });
    console.log("byPlace", byPlace)
    return {byPlace, byUser};
}


export default placeRatingsReducer;