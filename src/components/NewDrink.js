import Page from './Page';
import PageTitle from './PageTitle';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PlaceCell from './PlaceCell';


const NewDrink = () => {
    const { id } = useParams()
    const drink = useSelector(st => st.drinkState.drinks[+id]);
    const draughts = useSelector(st => st.draughtState.draughts).filter(d => d.drink_id === +id);
    return (
        <Page name="Drink">
            <PageTitle title={drink.name} />
            {draughts.map(d => <Link to={`/places/${d.place_id}`}><PlaceCell id={d.place_id}/></Link>)}
        </Page>
    )
};

export default NewDrink;