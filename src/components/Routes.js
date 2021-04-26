import { Route, Switch } from 'react-router-dom';
import Launch from './Launch';
import Drinks from './Drinks';
import Drink from './Drink';
import Places from './Places';
import Place from './Place';
import Users from './Users'
import Dashboard from './Dashboard';
import ManagePlace from './ManagePlace';
import AddDraught from './AddDraught';
import Auth from './Auth';
import Logout from './Logout';
import AuthRoute from './AuthRoute';
import Wrapper from './Wrapper';

const Routes = () => {
    return (
        <Switch>
            <Route path="/auth">
                <Auth />
            </Route>
            <Wrapper>
            <Route exact path="/drinks">
                <Drinks />
            </Route>
            <Route exact path="/drinks/:id">
                <Drink />
            </Route>
            <Route exact path="/places">
                <Places />
            </Route>
            <Route exact path="/places/:id">
                <Place />
            </Route>
            <Route exact path="/places/:id/manage">
                <ManagePlace />
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
            <Route exact path="/dashboard">
                <AddDraught />
            </Route>
            <Route exact path="/logout">
                <AuthRoute>
                    <Logout />
                </AuthRoute>
            </Route>
            </Wrapper>
            <Route exact path="/">
                <Launch/>
            </Route>
            <Route>
                <h1>404 NOT FOUND</h1>
            </Route>
        </Switch>
    )
    
};

export default Routes;