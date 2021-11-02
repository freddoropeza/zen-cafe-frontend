const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    console.log(cartItems.length)
    
    return (
        <section>
            <h1>Items in Cart</h1>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item._id} className="cartProduct">
                    <div>{item.title}</div>
                    <div>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div>
                        {item.qty} x ${item.price}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Cart;