import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Drink from './Drinks';

const Main = (props) => {
    const [ product, setProduct ] = useState([]);

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
            </Switch>
        </main>
    )
}

export default Main;