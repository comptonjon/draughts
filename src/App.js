import './App.css';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getDrinks } from './actions/creators/drinkCreators';
import { getPlaces } from './actions/creators/placeCreators';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch();
  const drinkInitialLoad = useSelector(st => st.drinkState.initialLoad);
  const placeInitialLoad = useSelector(st => st.placeState.initialLoad);
  useEffect(() => {
    if (!drinkInitialLoad) {
      dispatch(getDrinks());
    }
    if (!placeInitialLoad) {
      dispatch(getPlaces());
    }
  }, [])
  return (
    <div className="App">
      {
        (drinkInitialLoad && placeInitialLoad)
        ?
        <>
          <Navbar />
          <Routes />
        </>
        :
        <Spinner />
      }
      
    </div>
  );
}


export default App;
