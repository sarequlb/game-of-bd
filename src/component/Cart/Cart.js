import React, { useEffect, useState } from 'react';
import './Cart.css'
import Profile from '../Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = ({cart}) => {
    let time = 0;
    let quantity = 0;
    let breakTime = 1
    for(const game of  cart){
        quantity = quantity + game.quantity;
       time = time + game.time * game.quantity;
    }
    const [text,setText] = useState()
    let buttons = document.querySelectorAll('#button');
    let arr = Array.from(buttons);
    useEffect(() =>{
        const getBreak = localStorage.getItem('break-time');
        const storedTime = JSON.parse(getBreak)
        setText(storedTime)
    },[])

    arr.forEach(button =>{
        button.addEventListener('click', (e)=>{
            const btnText = +(button.innerText);
            setText(btnText)
            localStorage.setItem('break-time', JSON.stringify(btnText))
        })
    })
    const activityComplete = () =>{
        toast('You are done with your gaming activity',{
            position:"top-center",
            autoClose: 9000
        })
    }
    return (
        <div className='cart'>
            <Profile></Profile>
            <div>
                <h5>selected game:{quantity}</h5>
                <h2>Add a break</h2>
                <div className='btn-sec'>
                    <button id='button' >10</button>
                    <button id='button' >20</button>
                    <button id='button'>30</button>
                    <button id='button'>40</button>
                    <button id='button'>50</button>
                </div>
            </div>
            <h2>Game Details</h2>
            <div className='game-time'>
                <h3>Game Time</h3>
                <h3><span>{time}</span> second</h3>
            </div>
            <div className='break-time'>
                <h3>Break Time</h3>
                <h3><span>{text}</span> seconds</h3>
            </div>
            <button onClick={activityComplete} className='activity-btn'>Activity Complete</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;