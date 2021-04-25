import './Drink.css';
import Page from './Page';
import PageTitle from './PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { getDrink } from '../actions/creators/drinkCreators';
import DrinkDraughtList from './DrinkDraughtList';

const Drink = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const drinkState = useSelector(st => st.drinkState);
    const drink = drinkState.drinks[id];
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!drink) {
            dispatch(getDrink(id));
        }
        setLoading(false);
    }, []);
    return (
        <Page name="Drink">
            {(loading || drinkState.requests ) ? 
                <Spinner />                    :
                drinkState.error  ?
                <h1>ERROR {drinkState.error}</h1>    :
                <>
                <PageTitle title={drink.name} />
                <DrinkDraughtList drink={id}/>
                </>
            }
            
        </Page>
    )
};

export default Drink;