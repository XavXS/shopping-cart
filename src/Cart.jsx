import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    return (
        <div className='cart page'>
            <h1>Cart</h1>
            <div className='cart-bulks'>
                {cart.length == 0 && <p>Your cart is empty</p>}
                {cart.map(cartBulk => 
                    <div
                        className='cart-bulk'
                        key={cartBulk.item.id}
                    >
                        <img src={cartBulk.item.image}/>
                        <div className='bulk-desc'>
                            <Link to={'/product/' + cartBulk.item.id}>
                                <p>{cartBulk.item.name}</p>
                            </Link>
                            <h3>${cartBulk.item.price}</h3>
                            <div className='quantity'>
                                <button 
                                    onClick={() => updateQuantity(cartBulk.item.id, cartBulk.quantity - 1)}
                                    disabled={cartBulk.quantity <= 1}
                                >-</button>
                                <input 
                                    type='number' 
                                    value={cartBulk.quantity}
                                    onChange={(e) => {
                                        if(e.target.value < 1) updateQuantity(1);
                                        else updateQuantity(Number(e.target.value));
                                    }}
                                ></input>
                                <button 
                                    onClick={() => updateQuantity(cartBulk.item.id, cartBulk.quantity + 1)}
                                >+</button>
                            </div>
                            <button
                                className='remove-from-cart'
                                onClick={
                                    () => removeFromCart(cartBulk.item.id)
                                }
                            >remove</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

Cart.propTypes = {
    cart: PropTypes.array,
    removeFromCart: PropTypes.func,
    updateQuantity: PropTypes.func,
}

export default Cart;