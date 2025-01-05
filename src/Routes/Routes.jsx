import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order';
import Login from '../Pages/login/Login';
import SignUp from '../Pages/signUp/SignUp';
import PrivetRoute from './PrivetRoute';
import Secret from '../Pages/Shared/Secret';
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart';
import AllUser from '../Pages/Dashboard/Admin/AllUsers/AllUser';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'secret',
                element: (
                    <PrivetRoute>
                        <Secret />
                    </PrivetRoute>
                )
            }
        ]
    },
    {
        path: 'dashboard',
        element: (
            <PrivetRoute>
                <Dashboard />
            </PrivetRoute>
        ),
        children: [
            {
                path: 'cart',
                element: <Cart />
            },

            // admin routes 
            {
                path: 'users',
                element: <AllUser />
            }
        ]
    }
]);