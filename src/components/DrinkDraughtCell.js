import ListCell from './ListCell';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDrink } from '../actions/creators/drinkCreators';
import Spinner from './Spinner';
import CellSection from './CellSection';

const DrinkDraughtCell = ({drink:id}) => {
    const dispatch = useDispatch();
    const drinkState = useSelector(st => st.drinkState);
    const drink = drinkState.drinks[id];
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!drink) {
            dispatch(getDrink(id));
        }
        setLoading(loading => false);
    }, []);
    // if ( loading || drinkState.requests ) {
    //     return <h1>LOADING</h1>
    // }
    return (
        <ListCell>
            {
                (loading || drinkState.requests ) ?
                <Spinner/>              :
                drinkState.error ? <h1>ERROR</h1> :
                <>
                <CellSection>
                    <h3>{drink.name}</h3>
                    <p>{`${drink.maker} ${drink.abv}% ABV`}</p>
                </CellSection>
                </>
            }
        </ListCell>
    )

};

export default DrinkDraughtCell;