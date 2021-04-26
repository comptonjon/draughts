import './Place.css';
import Page from './Page';
import PageTitle from './PageTitle';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlace } from '../actions/creators/placeCreators';
import PlaceDraughtList from './PlaceDraughtList';



const Place = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const placeState = useSelector(st => st.placeState);
    const place = placeState.places[id];
    const ratings = useSelector(st => st.placeRatingsState.ratings);
    useEffect(() => {
        if (!place) {
            dispatch(getPlace(id))
        };
        setLoading(loading => false);
        if (ratings) {
            ratings.forEach(r => {
                if (r.place_id === +id) {
                    console.log(r);
                }
            })
        }
        
    }, [dispatch, id, place, ratings]);
    // if(loading || placeState.requests) {
    //     return <h1>LOADING.....</h1>
    // }

    if (placeState.error) {
        return (
            <Page name="Error">
                <h1>Error</h1>
            </Page>
        )
    }
    
    return (
        <Page name="Place">
            {
            (loading || placeState.requests) ? 
                <Spinner />        :

            <>
            <PageTitle title={`${place.name}`}/>

            <PlaceDraughtList place={id} />
            </>
        }
        </Page>
    )
    

};

export default Place;

// 1.  CHECK FOR VENUE
    // 2.  CHECK FOR DRAUGHT LIST
    
    // IF NOT VENUE OR VENUE ERROR HANDLE THAT
    // THEN, IF DRAUGHT LIST IS EMPTY, HANDLE THAT
    // IF VENUE --AND-- DRAUGHT LIST, GET THE BEERS.  