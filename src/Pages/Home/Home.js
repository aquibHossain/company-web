import React from 'react';
import Banner from './Banner/Banner';
import "./Home.css"
import Service from './Service';
import OurProcess from './OurProcess';
import Newslatter from './Newslatter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <OurProcess></OurProcess>

            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;