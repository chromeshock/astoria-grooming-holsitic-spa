import React from 'react';
import astoriaPetGrooming_v2 from '../facility-images/astoriaPetGrooming_v2.jpg';

const Home = () => {
    return (
        <>
            <div>
                <h1>Astoria Holistic Pets Spa</h1>
                <p></p>
                <div className='home-container' >
                    <img src={astoriaPetGrooming_v2} className = 'home-img' alt="storefront" />
                </div>
            </div>
        </>
    );
};


export default Home;
