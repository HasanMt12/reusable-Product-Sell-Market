import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import SingleCategoryCard from './SingleCategoryCard';

const SingleCategories = () => {
    const allProduct = useLoaderData()
    const [modalData , setModalData] = useState(null)
    console.log(allProduct);
    return (
        <>
        <div>
            {
                allProduct.map(product=> <SingleCategoryCard
                    key={product._id}
                    product={product}
                    setModalData={setModalData}
                ></SingleCategoryCard>)
            }
        </div>
        {
            modalData && 
            <BookingModal
                modalData={modalData}
                setModalData={setModalData}
             ></BookingModal>}
        </>
    );
};

export default SingleCategories;