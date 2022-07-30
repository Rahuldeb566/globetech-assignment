import React from 'react';
import Rocket from '../Rocket/Rocket';
import './Home.css';
import Header from './../Header/Header';

const Home = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Rocket></Rocket>
            <div className="home-container">
                <div className='left-part'>
                    <h1>Welcome to</h1>
                    <h1 id='globe'>Globetech</h1>
                    <p>We are commited to deliver <span>best IT services</span>. Our <br></br> 
                    Consultants have experience in working with <br></br> 
                    clients. We have extensive experience in the<br></br> 
                    software application space and also offer a<br></br>
                    broad range and depth of technology.</p>
                    <button className='button1'>Support us</button>
                    <button className='button2'>Our Mission</button>
                </div>
                <div className='right-part'>
                    <div className='sqr1'>
                        <div className="sqr2">
                            <div className="sqr3">
                                <div className="sqr4">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;