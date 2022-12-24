import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/categories/Categories";
import SingleCategories from "../../pages/categories/SingleCategories";
import WishList from "../../pages/categories/WishList";

import AddProduct from "../../pages/Dashboard/AddProductByseller/AddProduct";
import MyProduct from "../../pages/Dashboard/AddProductByseller/MyProduct";
import AllBuyers from "../../pages/Dashboard/All users/AllBuyers";
import AllSeller from "../../pages/Dashboard/All users/AllSeller";
import Users from "../../pages/Dashboard/All users/Users";
import MyOrders from "../../pages/Dashboard/MyOrders";
import Payment from "../../pages/Dashboard/Payment";
import About from "../../pages/Home/Home/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Signup from "../../pages/Login/SignUp/Signup";
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRouts from "../PrivateRoute/PrivateRoute";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/categories/:name',
                element: <SingleCategories></SingleCategories>,
                loader:({params})=> fetch(`https://used-product-sell-server.vercel.app/categories/${params.name}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
          
           
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouts> <DashboardLayout></DashboardLayout> </PrivateRouts>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/users',
                element: <AdminRoute><Users></Users></AdminRoute>
            },
            {
                path:'/dashboard/buyer',
                element:  <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/dashboard/seller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element:   <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoutes> <MyProduct></MyProduct></SellerRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://used-product-sell-server.vercel.app/reservation/${params.id}`)
            },
             {
            path: '/dashboard/wishlist',
            element: <WishList></WishList>
           }
           
             
        ]
    }
])

export default router;