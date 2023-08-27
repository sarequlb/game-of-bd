import React, { useState } from 'react';
import { useEffect } from 'react';
import './Games.css'
import Game from '../Game/Game';
import Cart from '../Cart/Cart';
import { addToDb, getActivityCart } from '../../fakedb';
const Games = () => {
    const [cart, setCart] = useState([])
    const [games, setGames] = useState([])
    useEffect(() =>{
        fetch('game.json')
        .then(res => res.json())
        .then(data => setGames(data))
    },[])

    useEffect(() =>{
        const storedCart = getActivityCart()
        const savedCart = []
        for(const id in storedCart){
            const addedGame = games.find(game => game.id === id)
            if(addedGame){
                const quantity = storedCart[id]
                addedGame.quantity = quantity;
                savedCart.push(addedGame)
            }
            setCart(savedCart)
        }
    },[games])
    
 
    const handleBtn =(selectedGame) =>{
        let newCart = []
        const exists =cart.find(game=> game.id === selectedGame.id)
        if(!exists){
            selectedGame.quantity = 1;
            newCart = [...cart, selectedGame]
        }
        else{
            const rest = cart.filter(game => game.id !== selectedGame.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists]
        }
        // newCart = [...cart,selectedGame]
        setCart(newCart)
        addToDb(selectedGame.id)
}
    return (
        <div className='games'>
            <div className='games-container'>
                {
                    
                    games.map(game => <Game key = {game.id} game = {game} handleBtn ={handleBtn}></Game>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Games;