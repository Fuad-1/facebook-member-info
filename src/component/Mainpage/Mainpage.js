import { link } from 'fs';
import React, { useEffect, useState } from 'react';
import profileData from '../../fakeData/data.json'
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import "./Mainpage.css"

const Mainpage = () => {
    const [profile, setProfile] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setProfile(profileData);
        console.log(profileData);
    },[])

    const handleAddProfile = (profile) => {
        console.log('Profile added', profile)
        const newCart = [...cart, profile];
        setCart(newCart);
    }
    return (
        <div className="mainPage-container">
            <div className=" profile-container">
                    {
                        profile.map(pr => <Profile 
                            handleAddProfile = {handleAddProfile}
                            profile={pr}></Profile>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Mainpage;