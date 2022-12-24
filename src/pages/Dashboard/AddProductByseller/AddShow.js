import React, { useEffect, useState } from 'react';
import Slider from '../../Home/Slider/Slider';


import AdShowCard from './AdShowCard';

const AddShow = () => {
        const [adInfo, setAddInfo] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setLoading(true);
            fetch("https://used-product-sell-server.vercel.app/advertise")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
         setAddInfo(data);
        setLoading(false);
      });
  }, []);


    return (
        <div className='my-6'>
            <div className='bg-slate-300 h-3/4 w-10/12 mx-auto py-2 rounded my-16'> 
                <h3 className='text-center font-bold text-3xl text-red-400'> Ads!<span className='ml-4 text-xl text-slate-700'>Recent uploaded product</span></h3></div>
           
           <section section className = "py-4 px-4 w-11/12 mx-auto h=3/5 sm:py-12 my-4 bg-slate-400 rounded text-gray-100" >
                
                 <div className="relative flex items-center justify-center w-full text-gray-50">
                    <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                        <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                <div className="flex items-center justify-start w-full h-3/5 gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    {adInfo.map(ad => (


                        <AdShowCard
                        key={ad._id}
                            ad={ad}
                        ></AdShowCard>
                        ))}
                </div>
                    <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
               </section>

        </div>
    );
};

export default AddShow;