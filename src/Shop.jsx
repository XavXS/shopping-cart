import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Shop.css';

const Shop = ({ addToCart }) => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result => result.json())
            .then(result => {
                setProducts(result)
                setLoading(false);
            });
    }, []);

    return (
        <div className='shop page'>
            <h1>Shop</h1>
            <div className='cards'>
                {
                    loading ? (
                        <h2 className='loading'>Loading...</h2>
                    ) : (
                        products.map(product =>
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
                        )
                    )
                }
            </div>
        </div>
    );
}

Shop.propTypes = {
    addToCart: PropTypes.func,
}

export default Shop;