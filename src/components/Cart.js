const ShoppingCart = (props) => {
    const { cartData } = props;

    return (
        <div className="wrapper cartWrapper">
            <div className="cartHeadings">
                { cartData.length === 0 ? <h2 className="cartHeading">Cart is empty</h2> : <h2 className="cartHeading">Shopping Cart:</h2>}
                <div className="grandTotalContainer">
                    <h3>Grand Total:</h3> 
                </div>
            </div>
            {cartData.map((product) => {
            return (
                <div className="cartItemContainer">                    
                    <div className="cartItemImage">
                        <img className="cartItemImage" src={product.image} alt={product.title} />
                    </div>
                    <div className="cartItemDescription">
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                        <button onClick={() => {props.removeFromCart(product)}}>Remove Item</button>
                    </div>
                </div>
            )
            })}
        </div>
    )
}

export default ShoppingCart