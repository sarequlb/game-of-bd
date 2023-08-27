import React from 'react';
import './Game.css'

const Game = (props) => {
    const {handleBtn,game} = props;
    const {id,name,img,info,time} = props.game;
    return (
        <div className='game'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p className='info'>{info}</p>
            <p>Time required: {time}<span>s</span></p>
            <button onClick={() => handleBtn(game)} className='btn-add'>Add to list</button>
        </div>
    );
};

export default Game;