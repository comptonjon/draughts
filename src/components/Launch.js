import './Launch.css';
import Page from './Page';
import PageTitle from './PageTitle';
import WelcomeMsg from './WelcomeMsg';

const Launch = () => {
    return (
        <Page name="Launch">
            <PageTitle title="Welcome."/>
            <WelcomeMsg />
        </Page>
    )
    
};

export default Launch;