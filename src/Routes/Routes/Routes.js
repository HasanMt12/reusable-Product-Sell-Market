import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/categories/Categories";
import SingleCategories from "../../pages/categories/SingleCategories";
import Users from "../../pages/Dashboard/All users/Users";
import MyOrders from "../../pages/Dashboard/MyOrders";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Signup from "../../pages/Login/SignUp/Signup";
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";
import PrivateRouts from "../PrivateRoute/PrivateRoute";

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
                loader:({params})=> fetch(`http://localhost:5000/categories/${params.name}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
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
                element:<Users></Users>
            }
        ]
    }
])

export default router;