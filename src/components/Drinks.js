import './Drinks.css';
import Page from './Page';
import PageTitle from './PageTitle';
import List from './List';
import ListCell from './ListCell';
import CellSection from './CellSection';
import { useSelector } from 'react-redux';
import LogoImage from './LogoImage';
import { Link } from 'react-router-dom';

const Drinks = () => {
    const drinkState = useSelector(st => st.drinkState);
    const drinks = drinkState.drinks;
    return (
        <Page name="Drinks">
            <PageTitle title="Drinks." />
            <List>
                {drinks && Object.values(drinks).map(d => {
                    return (
                        <Link key={d.id} to={`/drinks/${d.id}`}>
                        <ListCell >
                            <CellSection>
                                <h3>{d.name}</h3>
                                <p>{`${d.maker} ${d.abv}% ABV`}</p>
                            </CellSection>
                            <CellSection>
                                <LogoImage img={d.img_url} />
                            </CellSection>
                        </ListCell>
                        </Link>
                    )
                })
                }
            </List>
        </Page>
    )
};

export default Drinks;