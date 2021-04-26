import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-brand">
                <Link to="/"><p>WHAT'S ON tAPP?</p></Link>
            </div>
            <ul className="Navbar-menu">
                <li className="Navbar-link"><NavLink to="/drinks">Drinks</NavLink></li>
                <li className="Navbar-link"><NavLink to="/places">Places</NavLink></li>
                <li className="Navbar-link"><NavLink to="/users">Users</NavLink></li>
                <li className="Navbar-link"><NavLink to="/dashboard">Home</NavLink></li>
                <li className="Navbar-link"><NavLink to="/logout">Logout</NavLink></li>
            </ul>
        </div>
    )
};

export default Navbar;