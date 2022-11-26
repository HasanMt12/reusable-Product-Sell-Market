import React from 'react';
import Categories from '../../categories/Categories';
import Slider from '../Slider/Slider';
import Banner from './Banner/Banner';



const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Categories></Categories>
            <Slider></Slider>
        </div>
    );
};

export default Home;