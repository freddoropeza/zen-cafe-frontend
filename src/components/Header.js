import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
      <header className="Header">
        <Link to="/">
            <h1>Zen Cafe</h1>
        </Link>
        <Link to="/cart">
            <h3>Cart</h3>
        </Link>
      </header>
    );
  } 
  
export default Header;