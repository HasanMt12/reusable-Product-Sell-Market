import React from 'react';
import DropDownDashboard from '../../../Component/DropDownDashboard';

import Categories from '../../categories/Categories';
import AddShow from '../../Dashboard/AddProductByseller/AddShow';

import Banner from './Banner/Banner';
import ExtraSection from './ExtraSection';




const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
           <DropDownDashboard></DropDownDashboard>
            <Banner></Banner>
            <Categories></Categories>
            <AddShow></AddShow>
            <ExtraSection></ExtraSection>
   
        </div>
    );
};

export default Home;