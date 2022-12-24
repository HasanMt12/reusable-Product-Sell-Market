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
             
                    <ul className="menu my-4 ml-4 p-4  w-80 bg-slate-400 rounded text-base-content">
                         <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12   bg-slate-800   text-gray-100">
                 
                            <div className="space-y-4 text-center divide-y divide-gray-700">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                                  
                                </div>
                                <div className="flex justify-center pt-2 space-x-4 align-center">
                                                        
                                    </div>
                                </div>
                            </div>
                            
                        <li className='mt-2 font-bold'><Link to="/dashboard">My Orders</Link>
                        </li>

                        <li className='mt-2 font-bold'><Link to="/dashboard/wishlist">My wishlist</Link>
                        </li>

                            {/* only admin can access this route */}
                        {
                            isAdmin && <>
                         

                              <li><Link to="/dashboard/seller">All Seller</Link></li>
                              <li><Link to="/dashboard/buyer">All Buyer</Link></li>
                            </>
                        }
                            {
                                isSeller && <>
                                  <li className='my-2'><Link to="/dashboard/addProduct">Add product</Link></li>
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