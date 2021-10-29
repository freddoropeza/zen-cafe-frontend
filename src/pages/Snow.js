import { Link } from "react-router-dom";

const Snow = (props) => {
    const snowArr = props.product.filter(obj => (
        obj.type === "snow"
    ))

    const loaded = () => {
        return snowArr.map(product => (
            <div key={product._id} className="product">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        ))
    }

    const loading = () => <h1>Loading ...</h1>;

    return (
        <section>
            <Link to="/">
                <h1>Drinks</h1>
            </Link>
            <Link to="/snow">
                <h1>Snow Cream</h1>
            </Link>
            { props.product ? loaded() : loading() }
        </section>
    )
}

export default Snow;