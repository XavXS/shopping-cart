import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuantityAddToCart from './QuantityAddToCart';
import './Product.css';

const Product = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(id);
        fetch('https://fakestoreapi.com/products/' + id)
        .then(result => result.json())
        .then(result => {
            console.log(result);
            setProduct(result)
            setLoading(false);
        });
    }, [id]);

    return (
            <div className='product page'>
                {
                    loading ? (
                        <h2 className='loading'>Loading...</h2>
                    ) : (
                        <>
                            <div className='product-main'>                            
                                <div className='product-image'>
                                    <img src={product.image}/>
                                </div>
                                <div className='product-details'>
                                    <h3 className='product-title'>{product.title}</h3>
                                    <h2>${product.price}</h2>
                                    <QuantityAddToCart
                                        item={{
                                            name: product.title,
                                            image: product.image,
                                            price: product.price,
                                            id: product.id,
                                        }}
                                        addToCart={addToCart}
                                    />
                                </div>
                            </div>
                            <div className='product-desc'>
                                <h4>Description</h4>
                                <p>{product.description}</p>
                            </div>
                        </>
                    )
                }
            </div>
    );
}

Product.propTypes = {
    addToCart: PropTypes.func,
}

export default Product;