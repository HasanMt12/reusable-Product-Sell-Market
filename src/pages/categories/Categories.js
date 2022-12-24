import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories , setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://used-product-sell-server.vercel.app/categories")
        .then(res => res.json())
        .then(data => setCategories(data))

    },[]);
    return (
        <div className='mt-20'>
            <div className='w-10/12 mx-auto bg-slate-300 py-2 my-4 rounded'>
                <h1 className='text-center text-bold lg:text-4xl text-xl text-slate-900 mb-2'>Smartphone Brands For You</h1>
                <h1 className='text-center text-sm lg:text-2xl  text-slate-900 mb-2'>Browse items by category</h1>
            </div>
            
            <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    categories.map(category=> <CategoryCard
                    key={category._id}
                    category={category}
                    >    
                    </CategoryCard>)
                }

            </div>
            
        </div>
    );
};

export default Categories;