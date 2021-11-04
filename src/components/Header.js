import { Link } from 'react-router-dom'

const Header = (props) => {
    const { countCartItems } = props;
    return (
      <header className="Header">
        <Link to="/">
            <img className="logo" src="https://i.ibb.co/kXNxW17/zencafelogo.jpg" alt="logo"></img>
        </Link>
        <Link className="cart" to="/cart">
            Cart{' '}
            {countCartItems ? (
                <button className="cartBtn">{countCartItems}</button>
            ) : (
                ''
            )}
        </Link>
      </header>
    );
  } 
  
export default Header;