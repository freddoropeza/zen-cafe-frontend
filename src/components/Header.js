import { Link } from 'react-router-dom'

const Header = (props) => {
    const { countCartItems } = props;
    return (
      <header className="Header">
        <Link to="/">
            <h1>Zen Cafe</h1>
        </Link>
        <Link to="/cart">
            Cart{' '}
            {countCartItems ? (
                <button>{countCartItems}</button>
            ) : (
                ''
            )}
        </Link>
      </header>
    );
  } 
  
export default Header;