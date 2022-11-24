import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Categories from "../../pages/categories/Categories";
import DashBoard from "../../pages/Dashboard/DashBoard";
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
                
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouts> <DashBoard></DashBoard> </PrivateRouts>
    }
])

export default router;