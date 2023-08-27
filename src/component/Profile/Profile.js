import React from 'react';
import image from '../../image-m.jpg'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationPin} from '@fortawesome/free-solid-svg-icons'


const Profile = () => {
    return (
        <div>
            <div className='introduce'>
                <div>
                <img src={image} alt="" />
                </div>
                <div className='details'>
                <h2 className='name'>Kazee Siam</h2>
                <p>
                <FontAwesomeIcon icon = {faLocationPin}></FontAwesomeIcon>
                  <span className='location'>Sreepur,Gazipur</span>
                </p>
                </div>
            </div>
            <div className='w-h-a'>
                    <div className='w'>
                        <h2>42<span>kg</span></h2>
                        <h5>Weight</h5>
                    </div>
                    <div className='h'>
                        <h2>5.6<span></span></h2>
                        <h5>Height</h5>
                    </div>
                    <div className='a'>
                        <h2>19<span>yrs</span></h2>
                        <h5>Age</h5>
                    </div>
                </div>
        </div>
    );
};

export default Profile;