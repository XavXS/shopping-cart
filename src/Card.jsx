import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css';

const Card = ({item, addToCart}) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='card'>
            <img src={item.image}/>
            <p>{item.name}</p>
            <h3>${item.price}</h3>
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
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.object,
    addToCart: PropTypes.func,
}

export default Card;