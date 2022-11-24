import React from 'react';
import Categories from '../../categories/Categories';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div  className="w-11/12 mx-auto">
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;