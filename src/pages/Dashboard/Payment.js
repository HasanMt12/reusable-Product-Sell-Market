import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);
const Payment = () => {
    const bookingData = useLoaderData();
    const {price, product , location , email , phone } = bookingData;
    return (
        <div className=''>
            <div className='flex justify-center'>
            <h2 className='mr-16'> product <span className='text-green-600'>{product}</span> </h2>
            <h2 className=''>price $ <span className='text-green-600'> {price}</span></h2>
            </div>
             <div className='w-96 mx-auto bg-slate-300 rounded my-12'>
                <Elements stripe={stripePromise}>
                    <Checkout
                        bookingData={bookingData}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;