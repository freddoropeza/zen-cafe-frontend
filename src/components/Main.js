import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Drink from '../pages/Drinks';
import Snow from '../pages/Snow';
import Cart from './Cart';

const Main = (props) => {
    const [ product, setProduct ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);

    const BASE_URL = "http://localhost:3001/";

    const getProduct = async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => getProduct(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Drink product={product} />
                </Route>
                <Route path="/snow">
                    <Snow product={product} />
                </Route>
                <Route path="/cart">
                    <Cart cartItems={cartItems} />
                </Route>
            </Switch>
        </main>
    )
}

export default Main;