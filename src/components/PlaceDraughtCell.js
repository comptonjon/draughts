import Spinner from './Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ListCell from './ListCell';
import { getPlace } from '../actions/creators/placeCreators';
import CellSection from './CellSection';

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
    }, [dispatch, id, place]);
    return (
        <ListCell>
            {
                (loading || placeState.requests ) ?
                    <Spinner />                   :
                    placeState.error   ?
                        <h1>Error</h1> :
                    <>
                        <CellSection>
                            <h3>{place.name}</h3>
                            <p>{`${place.address} ${place.city}, ${place.state} ${place.zip}`}</p>
                        </CellSection>
                    </>
            }
        </ListCell>
    )
};

export default PlaceDraughtCell;