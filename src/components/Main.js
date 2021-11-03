import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Drink from '../pages/Drinks';
import Snow from '../pages/Snow';
import Cart from './Cart';

const Main = (props) => {
    const [ product, setProduct ] = useState([]);
    const [ cartItems, setCartItems] = useState([]);

    const BASE_URL = "http://localhost:3001/";

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
        <main>
            <Switch>
                <Route exact path="/">
                    <Drink onAdd={onAdd} onRemove={onRemove} product={product} />
                </Route>
                <Route path="/snow">
                    <Snow onAdd={onAdd} onRemove={onRemove} product={product} />
                </Route>
                <Route path="/cart">
                    <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
                </Route>
            </Switch>
        </main>
    )
}

export default Main;