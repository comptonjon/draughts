import ListCell from './ListCell';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getDrink } from '../actions/creators/drinkCreators';
import beer_mug from '../images/beer_mug.jpg'
import Spinner from './Spinner';
import './DrinkCell.css'

const DrinkCell = ({id}) => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(beer_mug);
    const dispatch = useDispatch();
    const drinkState = useSelector(st => st.drinkState);
    const drink = drinkState.drinks[id];
    const drinkRatings = useSelector(st => st.drinkRatingsState.ratings).filter(r => r.drink_id === +id);
    useEffect(() => {
        if (!drink) {
            dispatch(getDrink(id))
        } else {
            setImage(drink.img_url)
            setLoading(false);
        }
    }, [drink]);
    return (
        <ListCell>
            {
                loading 
                ?
                <Spinner />
                :
                <>
                    <div className="drink-data">
                        <h3>{drink.name}</h3>
                        <p>{`${drink.maker} ${drink.abv}% ABV`}</p>
                        <p>Rating: {getAggDrinkRatings(drinkRatings).toFixed(2)}/5 - {drinkRatings.length} Ratings</p>
                    </div>
                    <div className="drink-image">
                        <img src={drink.img_url} onError={() => setImage(beer_mug)} alt="beer-logo"/>
                    </div>
                </>
            }
            
        </ListCell>
    )
}

function getAggDrinkRatings(arr) {
    const divisor = arr.length;
    const sum = arr.reduce((acc, val) => {return acc + val.rating}, 0);
    return (Math.floor(sum*100))/100 / divisor;
}

export default DrinkCell;