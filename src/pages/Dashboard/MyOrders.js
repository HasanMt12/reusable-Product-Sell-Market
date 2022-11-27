import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

     const url = `http://localhost:5000/reservation?email=${user?.email}`;
      
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
     
    return (
        <div >
        <h2>start</h2>
        <div >
                <table className="table w-9/12">
                    <thead>
                        <tr>
                            <th></th> 
                            <th>product Photo</th>
                            <th>Buyer name</th>
                            <th>Title</th>
                            <th>Price</th>
                           
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservation &&
                            reservation?.map((reserve, i)=> 
                            <tr>      
                                <th>{i + 1}</th>
                         <div className="avatar">
                        <div className="rounded w-16 h-16">
                        {reserve?.img && (
                            <img
                            src={reserve.img}
                            alt="Avatar Tailwind CSS Component"
                            />
                        )}
                        </div>
          </div>
                                <td>{reserve.name}</td>
                                <td>{reserve.product}</td>
                                <td>{reserve.price}</td>
                                
                                <td>
                                      {
                                         !reserve.paid && <Link
                                            to={`/dashboard/payment/${reserve._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
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