import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryCard from './SingleCategoryCard';

const SingleCategories = () => {
    const allProduct = useLoaderData()
    console.log(allProduct);
    return (
        <div>
            {
                allProduct.map(product=> <SingleCategoryCard
                    key={product._id}
                    product={product}
                ></SingleCategoryCard>)
            }
        </div>
    );
};

export default SingleCategories;