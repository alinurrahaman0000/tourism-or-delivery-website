import React from 'react';
import Banner from '../Banner/Banner';
import Delivary from '../Delivary/Delivary';
import Products from '../Product/Products';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <Delivary></Delivary>
            
        </div>
    );
};

export default Home;