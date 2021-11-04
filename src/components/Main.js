import { Route, Switch } from 'react-router-dom';
import Drink from '../pages/Drinks';
import Snow from '../pages/Snow';
import Cart from './Cart';

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Drink onAdd={props.onAdd} onRemove={props.onRemove} product={props.product} />
                </Route>
                <Route path="/snow">
                    <Snow onAdd={props.onAdd} onRemove={props.onRemove} product={props.product} />
                </Route>
                <Route path="/cart">
                    <Cart onAdd={props.onAdd} onRemove={props.onRemove} cartItems={props.cartItems} />
                </Route>
            </Switch>
        </main>
    )
}

export default Main;