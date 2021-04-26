import './Places.css';
import Page from './Page';
import PageTitle from './PageTitle';
import List from './List';
import ListCell from './ListCell';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CellSection from './CellSection';

const Places = () => {
    const places = useSelector(st => st.placeState.places);

    return (
        <Page name="Places">
            <PageTitle title="Places."/>
            <List>
                {places && Object.values(places).map(p => {
                    return (
                        <Link key={p.id} to={`/places/${p.id}`}>
                            <ListCell>
                                <CellSection>
                                    <h3>{p.name}</h3>
                                    <p>{`${p.address} ${p.city}, ${p.state} ${p.zip}`}</p>
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

export default Places;