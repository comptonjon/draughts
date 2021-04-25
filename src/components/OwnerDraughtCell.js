import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getDrink } from '../actions/creators/drinkCreators';
import ListCell from './ListCell';
import { editPlaceDraught } from '../actions/creators/draughtCreators'

const OwnerDraughtCell = ({id, pid, active}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const drinkState = useSelector(st => st.drinkState);
    const drink = drinkState.drinks[id];
    useEffect(() => {
        if (!drink) {
            dispatch(getDrink(id));
        }
        setLoading(loading => false);
    }, [])

    const handleStatusChange = () => {
        dispatch(editPlaceDraught(pid, id, !active))
    }
    return (
        <ListCell>
            {
                (loading || drinkState.requests ) 
                ?
                <h1>Loading</h1>
                :
                drinkState.error
                ?
                <h1>ERROR LOADING DATA</h1>
                :
                <>
                <div className="ListCell-info">
                    <h3>{drink.name}</h3>
                    <p>{drink.maker}</p>
                </div>
                <div className="OwnerDraughtCell-buttons">
                    <button onClick={handleStatusChange}>Activate</button>
                    <button>Delete</button>
                </div>
                </>
            }
        </ListCell>
    )
}

export default OwnerDraughtCell;