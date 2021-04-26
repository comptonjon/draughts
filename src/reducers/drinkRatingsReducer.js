import { DRINK_RATING_API_REQUEST, DRINK_RATING_INITIAL_LOAD_SUCCESS, DRINK_RATING_API_SUCCESS, DRINK_RATING_API_ERROR } from '../actions/types/drinkRatingTypes'

const INITIAL_STATE = { initialLoad: false, requests: 0, error: null, ratings: {}};

const drinkRatingsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DRINK_RATING_API_REQUEST:
            return { ...state, error: null, requests: state.requests + 1};
        case DRINK_RATING_INITIAL_LOAD_SUCCESS:
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
        case DRINK_RATING_API_ERROR:
            return { ...state, requests: state.requests - 1, error: action.error };
        default: 
            return state;
    }
}

export default drinkRatingsReducer;