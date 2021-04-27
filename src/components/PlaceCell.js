import ListCell from './ListCell';
import { useSelector } from 'react-redux';

const PlaceCell = ({id}) => {
    const place = useSelector(st => st.placeState.places[id]);
    const placeRatings = useSelector(st => st.placeRatingsState.ratings).filter(r => r.place_id === +id);
    return (
        <ListCell>
            <div className="place-data">
                <h3>{place.name}</h3>
                <p>{`${place.address} ${place.city}, ${place.state} ${place.zip}`}</p>
            </div>
        </ListCell>
    )

}

export default PlaceCell;