import './Auth.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page from './Page';
import PageTitle from './PageTitle';
import { registerUser, loginUser } from '../actions/creators/sessionCreators';

const Auth = () => {
    const user = useSelector(st => st.sessionState.user);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username: "", password: "", email: "", city: "", state: "", zip: ""});
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name] : value
        });
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        if (isLoggingIn) {
            dispatch(loginUser({username: formData.username, password: formData.password}));
        } else {
            dispatch(registerUser(formData));
        }
    }
    const toggleLogin = () => {
        setIsLoggingIn(isLoggingIn => !isLoggingIn);
    }
    if (user) {
        return <Redirect to={'/places'}/>
    }
    return (
            <Page name="Auth">
                <PageTitle title={isLoggingIn ? "LOG IN" : "REGISTER USER"}/>
                <button onClick={toggleLogin}>{isLoggingIn ? "SWITCH TO SIGN UP" : "SWITCH TO LOG IN"}</button>
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label style={{display: "none"}}>Username</label>
                        <input type="text" 
                               placeholder="Enter Username"
                               value={formData.username}
                               name="username"
                               id="username"
                               onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label style={{display: "none"}}>Username</label>
                        <input type="password" 
                               placeholder="Enter Password"
                               value={formData.password}
                               name="password"
                               id="password"
                               onChange={handleChange}
                        />
                    </div>
                    {!isLoggingIn &&
                        <>
                        <div className='form-group' >
                        <label for="email" style={{display: "none"}}>Email</label>
                        <input type="email" 
                               placeholder="Email Address"
                               value={formData.email}
                               name="email"
                               id="email"
                               onChange={handleChange}
                        />
                        </div>
                        <div className='form-group'>
                            <label for="city" style={{display: "none"}}>City</label>
                            <input type="text" 
                                placeholder="Current City"
                                value={formData.city}
                                name="city"
                                id="city"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label for="state" style={{display: "none"}}>State</label>
                            <input type="text" 
                                placeholder="State"
                                value={formData.state}
                                name="state"
                                id="state"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label for="zip" style={{display: "none"}}>Zip Code</label>
                            <input type="text" 
                                placeholder="Zip Code"
                                value={formData.zip}
                                name="zip"
                                id="zip"
                                onChange={handleChange}
                            />
                        </div>
                        </>
                    }
                    <div className="form-group">
                        <button>Submit</button>
                    </div>
                </form>
            </Page>
    );
};

export default Auth;