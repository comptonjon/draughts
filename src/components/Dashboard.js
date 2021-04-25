import './Dashboard.css';
import Page from './Page';
import PageTitle from './PageTitle';
import DashSection from './DashSection';
import DashButton from './DashButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import EditProfileModal from './EditProfileModal';

const Dashboard = () => {
    const userId = useSelector(st => st.sessionState.user);
    const user = useSelector(st => st.userState.users[userId]);
    const [editProfile, setEditProfile] = useState(false);
    return (
        <Page name="Dashboard">
            {editProfile && <EditProfileModal cancel={() => setEditProfile(false)} user={user}/>}
            <PageTitle title="DASHBOARD." />
            <DashSection>
                <h2>User: {user.username}</h2>
                <p>Email: {user.email}</p>
                <p>Location: {`${user.city}, ${user.state}`}</p>
                <p>Business Owner: {user.is_owner ? `YES` : `NO`}</p>
                <DashButton onClick={() => setEditProfile(true)}title="Edit Profile"/>
            </DashSection>
            {user.is_owner &&
            <DashSection>
                <h2>2 Businesses Listed</h2>
            <DashButton title="Manage Businesses"/>
            </DashSection>}
            <DashSection>
                <h2>6 Drink Ratings</h2>
                <DashButton title="View Ratings"/>
            </DashSection>
            <DashSection>
                <h2>6 Places Ratings</h2>
                <DashButton title="View Ratings"/>
            </DashSection>
        </Page>
    )
}

export default Dashboard;