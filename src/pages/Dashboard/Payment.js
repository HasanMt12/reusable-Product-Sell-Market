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
        <div>
            <h2> product {product}</h2>
            <h2>price $ {price}</h2>
             <div className='w-96 my-12'>
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