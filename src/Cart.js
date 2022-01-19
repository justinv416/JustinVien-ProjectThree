const ShoppingCart = (props) => {
    const { cartData } = props;
    console.log(cartData.length)


    return (
        <div className="wrapper">
            { cartData.length === 0 ? <h2>Cart is empty</h2> : <h2>Shopping Cart:</h2>}
            {cartData.map((product) => {
            return (
                <div className="cartItemContainer" key={product.id}>                    
                    <div className="cartItemImage">
                        <img className="cartItemImage" src={product.image} alt={product.title} />
                    </div>
                    <div className="cartItemDescription">
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                        <button onClick={() => {console.log(product.id)}}>Remove Item</button>
                    </div>
                </div>
            )
            })}
            <h3>Grand Total:</h3> 
        </div>
    )
}

export default ShoppingCart