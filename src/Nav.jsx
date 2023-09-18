import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css';

function Nav({ numItems }) {
  return (
    <>
      <header>
        <Link to='/'>ABSOLUTELY RANDOM</Link>
      </header>
      <nav>
        <Link to='/'><button>Home</button></Link>
        <Link to='shop'><button>Shop</button></Link>
        <Link to='cart'><button>Cart ({numItems})</button></Link>
      </nav>
      <Outlet />
      <footer>
        xavxs.github.io
      </footer>
    </>
  )
}

Nav.propTypes = {
  numItems: PropTypes.number,
};

export default Nav;
