import './Drinks.css';
import Page from './Page';
import PageTitle from './PageTitle';
import List from './List';
import ListCell from './ListCell';
import CellSection from './CellSection';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrinks } from '../actions/creators/drinkCreators';
import Spinner from './Spinner';
import LogoImage from './LogoImage';

const Drinks = () => {
    const dispatch = useDispatch();
    const drinkState = useSelector(st => st.drinkState);
    const drinks = drinkState.drinks;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!drinks.length) {
            dispatch(getDrinks());
        }
        setLoading(loading => false);
    }, []);
    return (
        <Page name="Drinks">
            <PageTitle title="Drinks." />
            <List>
                {drinks && Object.values(drinks).map(d => {
                    return (
                        <ListCell key={d.id}>
                            <CellSection>
                                <h3>{d.name}</h3>
                                <p>{`${d.maker} ${d.abv}% ABV`}</p>
                            </CellSection>
                            <CellSection>
                                <LogoImage img={d.img_url} />
                            </CellSection>
                        </ListCell>
                    )
                })
                }
            </List>
        </Page>
    )
};

export default Drinks;