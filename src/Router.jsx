import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: 'Shop', element: <Shop /> },
                { path: 'Cart', element: <Cart /> },
            ],
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;