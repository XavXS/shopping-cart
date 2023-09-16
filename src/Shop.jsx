import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Shop.css';

const Shop = ({ addToCart }) => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result => result.json())
            .then(result => setProducts(result));
    }, []);

    return (
        <div className='home'>
            <h1>Shop</h1>
            <div className='cards'>
                {products.map(product =>
                    <Card 
                        item={{
                            name: product.title,
                            image: product.image,
                            price: product.price,
                            id: product.id,
                        }}
                        addToCart={addToCart}
                        key={product.id}
                    />
                )}
            </div>
        </div>
    );
}

Shop.propTypes = {
    addToCart: PropTypes.func,
}

export default Shop;