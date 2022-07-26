import React from 'react';
import './Header.css';
import logo from '../../images/output-onlinepngtools.png';

const Header = () => {
    return (
        <div className='header-container container'>
            <div className='logo navbar-brand'>
                <img src={logo} alt="" />
            </div>
            <div className='nav d-flex'>
                <a href="/">Home</a>
                <a href="/Services">Services</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;