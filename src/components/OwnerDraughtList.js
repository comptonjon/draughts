import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaceDraughts } from '../actions/creators/draughtCreators';
import List from './List';
import Spinner from './Spinner';
import OwnerDraughtCell from './OwnerDraughtCell';

const OwnerDraughtList = ({id}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const draughtsState = useSelector(st => st.draughtsState);
    const draughtList = draughtsState.places[id];
    useEffect(() => {
        if (!draughtList) {
            dispatch(getPlaceDraughts(id));
        }
        setLoading(loading => false);
    }, []);

    return (
        <List>
            {
                (loading || draughtsState.requests )
                ?
                <Spinner />
                :
                    (draughtsState.error)
                    ?
                    <h1>ERROR</h1>
                    :
                    <>
                    <h2>Active Draughts</h2>
                    {draughtList.draughts.map(d => d.active && <OwnerDraughtCell id={d.id} active={d.active} pid={id}/>)}
                    <h2>Inactive Draughts</h2>
                    {draughtList.draughts.map(d => !d.active && <OwnerDraughtCell id={d.id} active={d.active} pid={id}/>)}
                    </>
            }
        </List>
    )
}

export default OwnerDraughtList;