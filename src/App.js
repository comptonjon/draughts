import './App.css';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDrinks } from './actions/creators/drinkCreators';
import { getPlaces } from './actions/creators/placeCreators';
import Spinner from './components/Spinner';
import { getPlaceRatings, getAllDrinkRatings } from './actions/creators/ratingsCreators';
import { getAllUsers } from './actions/creators/userCreators';
import { getAllOwners } from './actions/creators/placeOwnersCreators';
import { getAllDraughts } from './actions/creators/draughtCreators';
import { RESET } from './actions/types/globalTypes';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(st => st.sessionState.user);
  const drinkState = useSelector(st => st.drinkState);
  const placeState = useSelector(st => st.placeState);
  const userState = useSelector(st => st.userState);
  const placeRatingsState = useSelector(st => st.placeRatingsState);
  const drinkRatingsState = useSelector(st => st.drinkRatingsState);
  const ownerState = useSelector(st => st.ownerState);
  const draughtState = useSelector(st => st.draughtState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: RESET})
    }, 1000 * 60 * 5)
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (user) {
      if (!drinkState.initialLoad && !drinkState.requests) {
        dispatch(getDrinks());
      }
      if (!placeState.initialLoad && !placeState.requests) {
        dispatch(getPlaces());
      }
      if (!userState.initialLoad && !userState.requests) {
        dispatch(getAllUsers());
      }
      if (!placeRatingsState.initialLoad && !placeRatingsState.requests) {
        dispatch(getPlaceRatings());
      }
      if (!drinkRatingsState.initialLoad && !drinkRatingsState.requests) {
        dispatch(getAllDrinkRatings());
      }
      if (!ownerState.initialLoad && !ownerState.requests) {
        dispatch(getAllOwners());
      }
      if (!draughtState.initialLoad && !draughtState.requests) {
        dispatch(getAllDraughts());
      }
    }
    
  }, [dispatch, drinkState, placeState, userState, placeRatingsState, user])
 
  return (
    <div className="App">
      {
        (user && !drinkState.initialLoad && !placeState.initialLoad && !userState.initialLoad && !placeRatingsState.initialLoad && !drinkRatingsState.initialLoad && !ownerState.initialLoad && !draughtState.initialLoad)
        ?
        <Spinner />
        
        :
        <>
          <Navbar />
          <Routes />
        </>
        
      }
      
    </div>
  );
}


export default App;
