import './Drinks.css';
import Page from './Page';
import PageTitle from './PageTitle';
import List from './List';
import ListCell from './ListCell';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrinks } from '../actions/creators/drinkCreators';

const Drinks = () => {
    const dispatch = useDispatch();
    const drinks = useSelector(st => st.drinkState.drinks);
    useEffect(() => {
        dispatch(getDrinks());
    }, []);
    return (
        <Page name="Drinks">
            <PageTitle title="Drinks." />
            <List>
                {drinks && Object.values(drinks).map(d => {
                    return (
                        <ListCell key={d.id}>
                            <h3>{d.name}</h3>
                            <p>{`${d.maker} ${d.abv}% ABV`}</p>
                        </ListCell>
                    )
                })
                }
            </List>
        </Page>
    )
};

export default Drinks;