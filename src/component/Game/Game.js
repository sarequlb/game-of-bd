import React from 'react';
import './Game.css'

const Game = (props) => {
    const {id,name,img,info,time} = props.game;
    console.log(img)
    return (
        <div className='game'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p className='info'>{info}</p>
            <p>Time required: {time}</p>
            <button className='btn-add'>Add to list</button>
        </div>
    );
};

export default Game;