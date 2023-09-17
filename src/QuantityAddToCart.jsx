import { useState } from 'react';
import PropTypes from 'prop-types';

const QuantityAddToCart = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className='quantity'>
            <button 
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
            >-</button>
            <input 
                type='number' 
                value={quantity}
                onChange={(e) => {
                    if(e.target.value < 1) setQuantity(1);
                    else setQuantity(Number(e.target.value));
                }}
            ></input>
            <button 
                onClick={() => setQuantity(quantity + 1)}
            >+</button>
            </div>
            <button
                className='add-to-cart' 
                onClick={() => addToCart(item, quantity)}
            >Add to Cart</button>
        </>
    );
};

QuantityAddToCart.propTypes = {
    item: PropTypes.object,
    addToCart: PropTypes.func,
}

export default QuantityAddToCart;