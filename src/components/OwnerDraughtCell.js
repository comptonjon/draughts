import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getDrink } from '../actions/creators/drinkCreators';
import ListCell from './ListCell';

const OwnerDraughtCell = ({id}) => {
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
                <h3>{drink.name}</h3>
                <p>{drink.maker}</p>
                </>
            }
        </ListCell>
    )
}

export default OwnerDraughtCell;