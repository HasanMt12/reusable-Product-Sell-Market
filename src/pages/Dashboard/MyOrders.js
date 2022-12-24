import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

     const url = `https://used-product-sell-server.vercel.app/reservation?email=${user?.email}`;
      
       const { data: reservation = [] } = useQuery({
            queryKey: ['reservation', user?.email],
            queryFn: async () => {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }

       })
     console.log(reservation);
    return (
        <div >
             <h2 className='text-slate-900 font-bold lg:text-3xl text-center my-2' > Your ( {user?.displayName} ) Orders </h2>

        <div className='o' >
                <table className="table mx-auto w-9/12">
                    <thead>
                        <tr>
                            <th className='bg-slate-400'></th> 
                            <th className='bg-slate-400'>product Photo</th>
                            <th className='bg-slate-400'>Buyer name</th>
                            <th className='bg-slate-400'>Title</th>
                            <th className='bg-slate-400'>Price</th>
                           
                            <th className='bg-slate-400'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservation &&
                            reservation?.map((reserve, i)=>                 
                            <tr>      
                                <th>{i + 1}</th>
                         <td className="avatar ">
                        <div className="rounded w-16 h-16 object-center">
                        {reserve?.img && (
                            <img
                            src={reserve.img}
                            alt="product img"
                            />
                        )}
                        </div>
          </td>
                                <td>{reserve.name}</td>
                                <td>{reserve.product}</td>
                                <td>{reserve.price}</td>
                                
                                <td>
                                      {
                                         !reserve.paid && <Link
                                            to={`/dashboard/payment/${reserve._id}`}
                                        >
                                            <button
                                                className='px-8 p py-3 font-semibold rounded mr-4 bg-slate-700 text-gray-200'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        reserve.price && reserve.paid && <span className='text-green-500'>Paid</span>
                                    }

                                </td>
                            </tr>)
                        }
                           
                     
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MyOrders;