import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home page'>
            <div className='home-image'>
                <h2>Buy Random Things Online</h2>
                <Link to='shop'>
                    <button className='button shop-now'>Shop Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;