import { useEffect, useState } from 'react';
import Card from './Card';
import './Shop.css';

const Shop = () => {
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
                        name={product.title}
                        image={product.image}
                        price={product.price}
                        id={product.id}
                        key={product.id}
                    />
                )}
            </div>
        </div>
    );
}

export default Shop;