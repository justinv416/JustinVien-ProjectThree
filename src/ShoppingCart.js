import Mens from "./Mens"

const ShoppingCart = (props) => {
    return (
        <div className="wrapper">
            <h2>Shopping Cart:</h2>
            <h3>{props.title}</h3>
        </div>    
    )
}

export default ShoppingCart