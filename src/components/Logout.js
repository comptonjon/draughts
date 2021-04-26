import './Logout.css';
import Page from './Page';
import { useDispatch } from 'react-redux';
import { SESSION_LOG_OUT } from '../actions/types/sessionTypes';

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({type: SESSION_LOG_OUT});
    }
    return (
        <Page name="Logout">
            <h1>Logout?</h1>
            <button onClick={handleLogout}>Logout</button>
        </Page>
    )
};

export default Logout