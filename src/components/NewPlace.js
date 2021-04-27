import Page from './Page';
import PageTitle from './PageTitle';
import { useEffect, useState } from 'react';
import { getPlace } from '../actions/creators/placeCreators';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './Spinner';
import DrinkCell from './DrinkCell';
import { Link } from 'react-router-dom';

const NewPlace = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { id } = useParams();
    const place = useSelector(st => st.placeState.places[id]);
    const placeDraughts = useSelector(st => st.draughtState.draughts).filter(d => d.place_id === +id && d.active);
    useEffect(() => {
        console.log(placeDraughts)
        if (!place) {
            getPlace(id);
        } else {
            setLoading(false);
        }
    }, [place]);
    return (
        <Page name="Place">
            {
                loading 
                ?
                    <Spinner />
                :
                <>
                    <PageTitle title={place.name} />
                    {placeDraughts.map(d => <Link key={d.drink_id} to={`/drinks/${d.drink_id}`}><DrinkCell id={d.drink_id}/></Link>)}
                </>  
            }
        </Page>
    )
}

export default NewPlace;