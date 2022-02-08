const ShoppingCart = ({cartData, removeFromCart}) => {
    console.log(cartData)
    return (
        <div className="wrapper cartWrapper">
            {cartData.length === 0 ? 
                <h2 className="cartHeading">Cart is empty</h2> 
                : 
                <h2 className="cartHeading">Shopping Cart:</h2>}
            {cartData.map((item, index) => {
                return (
                    <div className="cartItemContainer" key={index}>                    
                        <div className="cartItemImageContainer">
                            <img className="cartItemImage" src={item.image} alt={item.title} />
                        </div>
                        <div className="cartItemDescription">
                            <h3>{item.title}</h3>
                            <h4 className="cartItemPrice">${item.price}</h4>
                            <h4 className="cartItemQuantity">Quantity: {item.quantity}</h4>
                            <button className="removeButton" onClick={() => {removeFromCart(item)}}>Remove From Cart</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ShoppingCart;