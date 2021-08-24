import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus  } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {

    const profileImgStyle = {height: '150px'}
    const {images, name, address, annualSalary, phone} = props.profile;
    return (
        <div className="profile-Info">
            <div>
                {/* <h3>Image Section</h3> */}
                <img style={profileImgStyle} src={images} alt="" />
            </div>

            <div className="info">
                {/* <h3>Profile inoformation section</h3> */}
                <h4>{name}</h4>
                
                <p><small>Address: {address.city}</small></p>
                <p><small>Contact No: {phone}</small></p>
                <p>Salary: ${annualSalary}</p>
                <button className="profile-button" onClick={()=> props.handleAddProfile(props.profile)}><FontAwesomeIcon icon={faUserPlus} /> Add Member</button>
            </div>
        </div>
    );
};

export default Profile;