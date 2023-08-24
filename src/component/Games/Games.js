import React, { useState } from 'react';
import { useEffect } from 'react';
import './Games.css'
import Game from '../Game/Game';

const Games = () => {
    const [games, setGames] = useState([])
    useEffect(() =>{
        fetch('game.json')
        .then(res => res.json())
        .then(data => setGames(data))
    },[])
    return (
        <div className='games'>
            <div className='games-container'>
                {
                    games.map(game => <Game key = {game.id} game = {game}></Game>)
                }
            </div>
            <div className='cart-container'>
                <h1>cart</h1>
            </div>
        </div>
    );
};

export default Games;