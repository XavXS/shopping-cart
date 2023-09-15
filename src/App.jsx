import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <nav>
        <Link to='/'><button>home</button></Link>
        <Link to='shop'><button>shop</button></Link>
        <Link to='cart'><button>cart</button></Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App;
