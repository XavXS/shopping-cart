import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Card = ({name, image, price, id}) => {
    const [quantity, setQuantity] = useState(1);


    return (
        <div className='card'>
            <img src={image}/>
            <p>{name}</p>
            <h3>${price}</h3>
            <p>Quantity</p>
            <div>
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
            <button>Add to Cart</button>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
}

export default Card;