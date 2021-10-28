import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
      <header className="Header">
        <Link to="/">
            <h1>Zen Cafe</h1>
        </Link>
      </header>
    );
  } 
  
export default Header;