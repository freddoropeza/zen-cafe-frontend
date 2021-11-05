import { Fragment } from "react";
import { Link } from "react-router-dom";

const Snow = (props) => {
    const {onAdd} = props; 

    const snowArr = props.product.filter(obj => (
        obj.type === "snow"
    ))

    const loaded = () => {
        return snowArr.map(product => (
            <div key={product._id} className="product">
                <img className="productImg" src={product.img} alt={product.title} />
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
            <div className="snowsLinks">
                <Link to="/">
                    <h1>Drinks</h1>
                </Link>
                <Link to="/snow">
                    <h1 className="snowsUndeline">Shaved Snow</h1>
                </Link>
            </div>
            <section className="snows">
                { props.product ? loaded() : loading() }
            </section>
        </Fragment>
    )
}

export default Snow;