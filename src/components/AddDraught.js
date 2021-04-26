import Page from './Page';
import { useState } from 'react';
import './AddDraught.css';
import Searchbar from './Searchbar';
import watAPI from '../watAPI';
import Spinner from './Spinner';

const AddDraught = () => {
    const [error, setError] = useState(null);
    const [untappdResults, setUntappdResults] = useState([]);
    const [dbResults, setDbResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = async (q) => {
        clearResults();
        setLoading(true);
        watAPI.searchUntappd(q).then(res => {
            handleResult(res);
            setLoading(false);
        }).catch(setError("ERROR FETCHING RESULTS"));

    }

    const clearResults = () => {
        setUntappdResults([]);
        setDbResults([]);
    }

    const handleResult = (res) => {
        setDbResults(res.db_results);
        setUntappdResults(res.untappd_results)
    }
    return (
        <Page name="AddDraught">
            <h1>ADD DRAUGHT</h1>
            { error && <h1>ERROR</h1>}
            <Searchbar handleSubmit={handleSearch}/>
            {loading && <Spinner />}
            {untappdResults.map(r => <p>{r.name}</p>)}
            {dbResults.map(r => <p>{r.name}</p>)}
        </Page>
    )
};

export default AddDraught;