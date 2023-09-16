import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css'

function Nav({ numItems }) {
  return (
    <>
      <nav>
        <Link to='/'><button>home</button></Link>
        <Link to='shop'><button>shop</button></Link>
        <Link to='cart'><button>cart ({numItems})</button></Link>
      </nav>
      <Outlet />
    </>
  )
}

Nav.propTypes = {
  numItems: PropTypes.number,
};

export default Nav;
