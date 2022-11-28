import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashBoardOutlet from '../Component/DashBoardOutlet';

import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdminSecurity';
import useSeller from '../hooks/useSellerSecurity';
import Navbar from '../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
             <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <DashBoardOutlet></DashBoardOutlet>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
             
                    <ul className="menu p-4  w-80 bg-base-100 text-base-content">
                         <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12   bg-slate-800   text-gray-100">
                            <img src={user.photoURL? user.photoURL : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            } alt="" className="w-32 h-32 mx-auto rounded-full   bg-gray-500 aspect-square" />
                            <div className="space-y-4 text-center divide-y divide-gray-700">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                                  
                                </div>
                                <div className="flex justify-center pt-2 space-x-4 align-center">
                                                        
                                    </div>
                                </div>
                            </div>
                        <li><Link to="/dashboard">My Orders</Link>
                        
                        </li>


                            {/* only admin can access this route */}
                        {
                            isAdmin && <>
                             <li><Link to="/dashboard/users">All Users</Link></li>

                              <li><Link to="/dashboard/seller">All Seller</Link></li>
                              <li><Link to="/dashboard/buyer">All Buyer</Link></li>
                            </>
                        }
                            {
                                isSeller && <>
                                  <li><Link to="/dashboard/addProduct">Add product</Link></li>
                                <li><Link to="/dashboard/myProduct">My Product</Link></li>
                                </>
                            }
                        
                       
                        
                       
                    

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;