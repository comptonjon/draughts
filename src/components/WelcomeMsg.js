import './WelcomeMsg.css'
import { useHistory } from 'react-router-dom';

const WelcomeMsg = () => {
    const history = useHistory();
    const toAuth = () => {
        history.push('/drinks');
    }
    return (
        <div className="WelcomeMsg">
            <h2>WELCOME TO WHAT'S ON TAPP!</h2>
            <p>Sign up for an account for access
                to our database of bars, restaurants, 
                beverages and up-to-date draught lists
                and find your favorite drinks!
            </p>
            <button onClick={toAuth}>ENTER HERE</button>
        </div>
    )
}

export default WelcomeMsg;