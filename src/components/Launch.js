import './Launch.css';
import Page from './Page';
import PageTitle from './PageTitle';
import WelcomeMsg from './WelcomeMsg';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Launch = () => {
    const user = useSelector(st => st.sessionState.user);
    if (user) {
        return <Redirect to="/places" />
    }
    return (
        <Page name="Launch">
            <PageTitle title="Welcome."/>
            <WelcomeMsg />
        </Page>
    )
    
};

export default Launch;