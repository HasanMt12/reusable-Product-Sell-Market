import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const Checkout = ({bookingData}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
        const stripe = useStripe();
        const [clientSecret, setClientSecret] = useState("");
        const elements = useElements();
        const { price ,email, name ,_id } = bookingData;

         useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://used-product-sell-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


       const handleSubmit = async (event) =>{
              event.preventDefault();
               if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

         const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
         if (error) {
            console.log(error);
            setCardError(error.message);
        }
          else {
            setCardError('');
            setProcessing(true);
        }
        setSuccess('');
         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        
         if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
           if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            
            fetch('https://used-product-sell-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);

       }
    return (
         <div>
            <div className=' border bg-slate- px-2 py-2'>
            <form className='bg-slate-200 px-26 py-2' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#0284c7',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-slate-600'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}> 
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
        </div>
    );
};

export default Checkout;