import React from 'react';
import logo from '../../../src/trophy3.png'
import './Header.css'
// import logo from '../../../public/pngegg.png'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <img src={logo} alt="" />
                <h1>Game Of BD</h1>
            </div>
            
            <h3>Select today's game</h3>
        </div>
    );
};

export default Header;