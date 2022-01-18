const ShoppingCart = (props) => {
    const { cartData } = props;
    return (
        <div className="wrapper">
            <h2>Shopping Cart:</h2>
            <div className="cartItemContainer">
                <img className="cartItemImage" src={cartData.image} alt={cartData.title} />
                <div className="cartItemDescription">
                    <h3>{cartData.title}</h3>
                    <h4>{cartData.price}</h4>
                    <h4>Quantity:{cartData.quantity}</h4>
                </div>
            </div>
        </div>    
    )
}

export default ShoppingCart