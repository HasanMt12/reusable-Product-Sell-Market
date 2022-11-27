import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdminSecurity';
import Navbar from '../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
             <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    {/* <div className="flex h-5/6 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
			
		</div>
		<div className="flex justify-center pt-2 space-x-4 align-center">
			
		</div>
	</div>
</div> */}
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>


                            {/* only admin can access this route */}
                        {
                            isAdmin && <>
                             <li><Link to="/dashboard/users">All Users</Link></li>
                            </>
                        }

                          <li><Link to="/dashboard/addProduct">Add product</Link></li>
                            <li><Link to="/dashboard/myProduct">My Product</Link></li>
                        
                       
                    

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;