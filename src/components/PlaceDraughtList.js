import List from './List';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPlaceDraughts } from '../actions/creators/draughtCreators';
import DrinkDraughtCell from './DrinkDraughtCell';

const PlaceDraughtList = ({place:id, full=false}) => {
    const dispatch = useDispatch();
    const draughtsState = useSelector(st => st.draughtsState);
    const place = draughtsState.places[id];
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!place) {
            dispatch(getPlaceDraughts(id));
        }
        setLoading(false);
    }, [dispatch, id, place]);
    if (loading || draughtsState.requests ) {
        return <h1>Loading...</h1>
    }
    return (
        <List>
            {place.draughts.map(d => d.active && <Link to={`/drinks/${d.id}`} key={d.id}><DrinkDraughtCell drink={d.id}/></Link>)}
        </List>
    )

}

export default PlaceDraughtList;