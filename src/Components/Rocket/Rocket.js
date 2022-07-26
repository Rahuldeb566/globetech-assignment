import React from 'react';
import './Rocket.css';
import rocket from '../../images/rocket.png';

const Rocket = () => {
    return (
        <div className='rocket container'>
            <img id='rocket1' src={rocket} alt="" />
        </div>
    );
};

export default Rocket;