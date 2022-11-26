import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories , setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategories(data))

    },[]);
    return (
        <div className='mt-20'>
            <h1 className='text-center text-bold text-6xl font-Tangerine text-slate-500 mb-6'>Categories</h1>
            <h1 className='text-center  text-2xl  text-slate-500 mb-6'>Browse items by category</h1>
            <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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