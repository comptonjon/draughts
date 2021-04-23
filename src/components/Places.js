import './Places.css';
import Page from './Page';
import PageTitle from './PageTitle';
import List from './List';
import ListCell from './ListCell';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaces } from '../actions/creators/placeCreators';

const Places = () => {
    const dispatch = useDispatch();
    const places = useSelector(st => st.placeState.places);
    useEffect(() => {
        dispatch(getPlaces());
    }, []);
    return (
        <Page name="Places">
            <PageTitle title="Places."/>
            <List>
                {places && Object.values(places).map(p => {
                    return (
                        <ListCell>
                            <h3>{p.name}</h3>
                            <p>{`${p.address} ${p.city}, ${p.state} ${p.zip}`}</p>
                        </ListCell>
                    )
                })
                }
            </List>
        </Page>
    )
};

export default Places;