import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Product from './Product';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);

    let numItems = 0;
    cart.forEach(cartBulk => numItems += cartBulk.quantity)

    const addToCart = (item, quantity) => {
        let itemExists = false;
        const newCart = cart.map(cartBulk => {
            if(cartBulk.item.id === item.id) {
                cartBulk.quantity += quantity;
                itemExists = true;
            } return cartBulk;
        });
        if(!itemExists) newCart.push({item: item, quantity: quantity});
        setCart(newCart);
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(cartBulk => cartBulk.item.id !== id));
    }

    const updateQuantity = (id, qty) => {
        setCart(cart.map(cartBulk => {
            if(cartBulk.item.id === id) cartBulk.quantity = qty;
            return cartBulk;
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
                    path: 'shop', 
                    element: <Shop addToCart={addToCart}/> 
                },
                { 
                    path: 'cart', 
                    element: <Cart 
                                cart={cart} 
                                removeFromCart={removeFromCart}
                                updateQuantity={updateQuantity}
                            /> 
                },
                {
                    path: 'product/:id',
                    element: <Product addToCart={addToCart}/>
                },
            ],
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;