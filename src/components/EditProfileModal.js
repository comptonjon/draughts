import ModalPage from './ModalPage';
import './EditProfileModal.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditProfileModal = ({user, cancel}) => {
    const userState = useSelector(st => st.userState);
    const [formData, setFormData] = useState({...user});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('goobar')
    }
    return (
        <ModalPage>
            <div className="EditProfileModal">
                <form onSubmit={handleSubmit}>
                    <h3>EDIT PROFILE</h3>
                    <div classname="EditFormGroup">
                    <label htmlFor="email">Email</label>
                    <input value={formData.email}
                           type="email"
                           placeholder="Enter Email"
                           onChange={handleChange}
                           name="email"
                           id="email"
                    />
                    </div>
                    <div>
                    <label htmlFor="city">City</label>
                    <input value={formData.city}
                           type="text"
                           placeholder="Enter City"
                           onChange={handleChange}
                           name="city"
                           id="city"
                    />
                    </div>
                    <div>
                    <label htmlFor="state">State</label>
                    <input value={formData.state}
                           type="text"
                           placeholder="Enter State"
                           onChange={handleChange}
                           name="state"
                           id="state"
                    />
                    </div>
                    <div>
                    <label htmlFor="zip">Zip Code</label>
                    <input value={formData.zip}
                           type="text"
                           placeholder="Enter Zip"
                           onChange={handleChange}
                           name="zip"
                           id="zip"
                    />
                    </div>
                    <button>SUBMIT</button>
                    <button onClick={cancel}>CANCEL</button>
                </form>
            </div>
            
        </ModalPage>
    )
};

export default EditProfileModal;