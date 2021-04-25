import Page from './Page'
import './ManagePlace.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPlace } from '../actions/creators/placeCreators'
import Spinner from './Spinner';
import OwnerDraughtList from './OwnerDraughtList';
import { useParams } from "react-router-dom";


const ManagePlace = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const placeState = useSelector(st => st.placeState);
    const place = placeState.places[id];
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
        if (!place) {
            dispatch(getPlace(id));
        }
        setLoading(loading => false);
    }, []);
    return (
        <Page name="ManagePlace">
            {
                ( loading || placeState.requests ) ?
                    <Spinner />                    :
                placeState.error  ?
                    <h1>ERROR</h1>:
                <>
                    <h1>{place.name}</h1>
                    <OwnerDraughtList id={id}/>
                </>
            }
        </Page>
    )
}

export default ManagePlace;