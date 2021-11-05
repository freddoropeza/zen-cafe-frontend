const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const totalPrice = cartItems.reduce((a, current) => a + current.price * current.qty, 0);
    
    const checkOut = () => {
        alert("Thank you for your purchase!");
    }

    return (
        <section className="cartMain">
            <h1>Items in Cart</h1>
            <div className="emptyCart">{cartItems.length === 0 && <div>Cart is Empty :(</div>}</div>
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
            {cartItems.length !==0 && (
                <div className="total">Total Price:
                    <strong> ${totalPrice}</strong>
                </div>
            )}
            {cartItems.length !==0 && (
                <form onSubmit={checkOut}>
                    <div className="checkOut">
                        <button type="submit">Check Out</button>
                    </div>
                </form>
            )}
        </section>
    )
}

export default Cart;