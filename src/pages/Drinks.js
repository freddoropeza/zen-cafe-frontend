import { Fragment } from "react";
import { Link } from "react-router-dom";

const Drink = (props) => {
    const {onAdd} = props; 

    const drinkArr = props.product.filter(obj => (
        obj.type === "drink"
    ))

    const loaded = () => {
        return drinkArr.map(product => (
            <div key={product._id} className="product">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div>
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
            </div>
        ))
    }

    const loading = () => <h1>Loading ...</h1>;

    return (
        <Fragment>
            <div className="drinksLinks">
                <Link to="/">
                    <h1 className="drinksUndeline">Drinks</h1>
                </Link>
                <Link to="/snow">
                    <h1>Snow Cream</h1>
                </Link>
            </div>
            <section className="drinks">
                { props.product ? loaded() : loading() }
            </section>
        </Fragment>
    )
}

export default Drink;