import Spinner from './Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ListCell from './ListCell';
import { getPlace } from '../actions/creators/placeCreators';

const PlaceDraughtCell = ({id}) => {
    const dispatch = useDispatch();
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
        <ListCell>
            {
                (loading || placeState.requests ) ?
                    <Spinner />                   :
                    placeState.error   ?
                        <h1>Error</h1> :
                    <>
                        <h3>{place.name}</h3>
                        <p>{`${place.address} ${place.city}, ${place.state} ${place.zip}`}</p>
                    </>
            }
        </ListCell>
    )
};

export default PlaceDraughtCell;