import React from 'react';
import './Cart.css'
import Profile from '../Profile/Profile';
const Cart = () => {
    return (
        <div className='cart'>
            <Profile></Profile>
            <div>
                <h2>Add a break</h2>
                <div className='btn-sec'>
                    <button>10</button>
                    <button>20</button>
                    <button>30</button>
                    <button>40</button>
                    <button>50</button>
                </div>
            </div>
            <h2>Game Details</h2>
            <div className='game-time'>
                <h3>Game Time</h3>
                <h3>200sec</h3>
            </div>
            <div className='break-time'>
                <h3>Break Time</h3>
                <h3>20sec</h3>
            </div>
            <button className='activity-btn'>Activity Complete</button>
        </div>
    );
};

export default Cart;