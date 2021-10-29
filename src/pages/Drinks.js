import { Link } from 'react-router-dom';
import { useState } from 'react';

const Index = (props) => {
    const drinkArr = props.product.filter(obj => (
        obj.type === "drink"
    ))

    const loaded = () => {
        return drinkArr.map(product => (
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
            { props.product ? loaded() : loading() }
        </section>
    )
}

export default Index;