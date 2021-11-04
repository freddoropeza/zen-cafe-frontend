import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';

function App() {
  const [ product, setProduct ] = useState([]);
    const [ cartItems, setCartItems] = useState([]);

    const BASE_URL = "https://zen-cafe-backend.herokuapp.com/";

    const getProduct = async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => getProduct(), [])

    const onAdd = (product) => {
        const exist = cartItems.find(x => x._id === product._id);
        if(exist) {
            setCartItems(
                cartItems.map((x) => 
                    x._id === product._id ? {...exist, qty: exist.qty + 1 } : x
                )
            )
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x._id === product._id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x._id !== product._id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}/>
      <Main onAdd={onAdd} onRemove={onRemove} product={product} cartItems={cartItems} />
    </div>
  );
}

export default App;