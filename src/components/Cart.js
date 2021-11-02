const Cart = (props) => {
    const { cartItems } = props;
    console.log(cartItems)

    return (
        <section>
            <h1>Items in Cart</h1>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
        </section>
    )
}

export default Cart;