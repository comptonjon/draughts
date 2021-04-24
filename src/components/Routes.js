import { Route, Switch } from 'react-router-dom';
import Launch from './Launch';
import Drinks from './Drinks';
import Places from './Places';
import Place from './Place';
import Users from './Users'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/drinks">
                <Drinks />
            </Route>
            <Route exact path="/places">
                <Places />
            </Route>
            <Route exact path="/places/:id">
                <Place />
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
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