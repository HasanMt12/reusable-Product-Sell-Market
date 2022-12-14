import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({modalData , setModalData}) => {
    const {mobilBrand , img,  sellingPrice}= modalData;
    const {user} = useContext(AuthContext)
    
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const location = form.location.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const img = form.img.value;
         const reservation = {
            name,
            email,
            product,
            phone,
            location,
            price,
            img
          
        }
    //   console.log(reservation);
    fetch('https://used-product-sell-server.vercel.app/reservation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reservation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    setModalData(null);
                 toast.success('Booking Confirmed')
                }
                 
            })

     
       
    }
    return (
        <>
        <input type="checkbox" id="bookingModal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative bg-slate-300">
            <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg  text-center font-bold"> Please! Fill-up this form and book this item </h3>
            


           <form onSubmit={handleBooking} className = ' grid grid-cols-1 gap-3 mt-10' >
                 <input name="name" type="text" defaultValue={user?.displayName} disabled  placeholder="Your Name" className=" input w-11/12 mx-auto font-bold input-bordered" />
                 <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-11/12 mx-auto  bg-slate-400 font-bold input-bordered" />
                 <input name="img" type="url" defaultValue={img} disabled  className="input w-11/12 mx-auto  bg-slate-400 font-bold input-bordered" />
                 <input name="product" type="text" defaultValue={mobilBrand} disabled placeholder="mobil brand" className="input bg-slate-400 font-bold w-11/12 mx-auto  input-bordered" />
                 <input name="price" type="text"  defaultValue={sellingPrice} disabled className="input bg-slate-400 font-bold w-11/12 mx-auto  input-bordered" />
                 <input name="phone" type="text" placeholder="please enter your Phone Number" required className="input input-info w-11/12 mx-auto  input-bordered" />
                 <input name="location" type="text" placeholder="meeting location" required className="input-info input  w-11/12 mx-auto  input-bordered" />
                 <input className='btn w-9/12 mx-auto bg-slate-100' type="submit" value="Submit" />

           </form>
        </div>
        </div>
        </>
    );
};

export default BookingModal;