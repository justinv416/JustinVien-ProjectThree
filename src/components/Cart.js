const ShoppingCart = ({cartData, removeFromCart, gTotal}) => {
    return (
        <div className="wrapper cartWrapper">
            {cartData.length === 0 ? 
                <h2 className="cartHeading">Cart is empty</h2> 
                : 
                <h2 className="cartHeading">Shopping Cart:</h2>}
            {cartData.map((item) => {
                return (
                    <div className="cartItemContainer" key={item.data.name}>                    
                        <div className="cartItemImageContainer">
                            <img className="cartItemImage" src={item.data.image} alt={item.title} />
                        </div>
                        <div className="cartItemDescription">
                            <h3>{item.data.title}</h3>
                            <h4 className="cartItemPrice">${item.data.price}</h4>
                            <h4 className="cartItemQuantity">Quantity: {item.data.quantity}</h4>
                            <button className="removeButton" onClick={() => {removeFromCart(item.name)}}>Remove From Cart</button>
                        </div>
                    </div>
                );
            })}
            <div className="cartTotal">
                <h3>{`Grand Total: $${gTotal}`}</h3>
            </div>
        </div>
    );
};

export default ShoppingCart;