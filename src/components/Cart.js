const ShoppingCart = (props) => {
    const { cartData } = props;

    return (
        <div className="wrapper cartWrapper">
            { cartData.length === 0 ? <h2 className="cartHeading">Cart is empty</h2> : <h2 className="cartHeading">Shopping Cart:</h2>}
            {cartData.map((product, index) => {
            return (
                <div className="cartItemContainer" key={index}>                    
                    <div className="cartItemImageContainer">
                        <img className="cartItemImage" src={product.image} alt={product.title} />
                    </div>
                    <div className="cartItemDescription">
                        <h3>{product.title}</h3>
                        <h4 className="cartItemPrice">${product.price}</h4>
                        <h4 className="cartItemQuantity">Quantity: {product.quantity}</h4>
                        <button className="removeButton" onClick={() => {props.removeFromCart(product)}}>Remove Item</button>
                    </div>
                </div>
            )
            })}
            <div className="grandTotalContainer">
                <h3>Grand Total:</h3> 
            </div>
        </div>
    )
}

export default ShoppingCart