import PropTypes from 'prop-types';
import QuantityAddToCart from './QuantityAddToCart';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({item, addToCart}) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <Link 
                    className='image-link'
                    to={'/product/' + item.id}
                >
                    <img src={item.image}/>
                </Link>
            </div>
            <Link className='item-name' to={'/product/' + item.id}>
                <p>{item.name}</p>
            </Link>
            <h3>${item.price}</h3>
            <QuantityAddToCart
                item={item}
                addToCart={addToCart}
            />
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.object,
    addToCart: PropTypes.func,
}

export default Card;