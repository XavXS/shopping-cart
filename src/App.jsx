import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    let numItems = 0;
    cart.forEach(item => numItems += item.quantity)

    const addToCart = (id, qty) => {
        let itemExists = false;
        const newCart = cart.map(item => {
            if(item.id === id) {
                item.quantity += qty;
                itemExists = true;
            } return item;
        });
        if(!itemExists) newCart.push({id: id, quantity: qty});
        setCart(newCart);
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    const updateQuantity = (id, qty) => {
        setCart(cart.map(item => {
            if(item.id === id)
                item.quantity = qty;
            return item;
        }));
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Nav numItems={numItems}/>,
            children: [
                { 
                    index: true, 
                    element: <Home /> 
                },
                { 
                    path: 'Shop', 
                    element: <Shop addToCart={addToCart}/> 
                },
                { 
                    path: 'Cart', 
                    element: <Cart 
                                cart={cart} 
                                removeFromCart={removeFromCart}
                                updateQuantity={updateQuantity}
                            /> 
                },
            ],
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;