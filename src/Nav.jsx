import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css';

function Nav({ numItems }) {
  return (
    <>
      <nav>
        <Link to='/'><button>Home</button></Link>
        <Link to='shop'><button>Shop</button></Link>
        <Link to='cart'><button>Cart ({numItems})</button></Link>
      </nav>
      <Outlet />
    </>
  )
}

Nav.propTypes = {
  numItems: PropTypes.number,
};

export default Nav;
