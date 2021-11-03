import { Link } from 'react-router-dom'
import Cart from './Cart';


const Header = (props) => {
    const { countCartItems } =props;
    return (
      <header className="Header">
        <Link to="/">
            <h1>Zen Cafe</h1>
        </Link>
        <Link to="/cart">
            <h3>Cart</h3> {" "}
            {countCartItems? (
                <button>{countCartItems}</button>
            ) : (
                " "
            )}
        </Link>
      </header>
    );
  } 
  
export default Header;