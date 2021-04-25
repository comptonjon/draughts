import './DrinkDraughtList.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDrinkDraughts } from '../actions/creators/draughtCreators'
import List from './List';
import Spinner from './Spinner';
import PlaceDraughtCell from './PlaceDraughtCell';

const DrinkDraughtList = ({drink:id}) => {
    const dispatch = useDispatch();
    const draughtsState = useSelector(st => st.draughtsState);
    const draughtList = draughtsState.drinks[id];
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!draughtList) {
            dispatch(getDrinkDraughts(id));
        }
        setLoading(loading => false)
    }, []);
    return (
        <List>
        {
            (loading || draughtsState.requests ) ? 
                <Spinner />                      :
                draughtsState.error ? 
                    <h1>ERROR</h1>  :
                    draughtList.draughts.map(d => <Link to={`/places/${d.id}`}><PlaceDraughtCell id={d.id} /></Link>)
        }
        </List>
    )
};

export default DrinkDraughtList;