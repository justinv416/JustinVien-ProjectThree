import axios from "axios"
import { useEffect, useState } from "react";

const Mens = (props) => {
    console.log(props.data)
    return (
        <div>
            <div className="wrapper">
                <h2>Shops Mens Clothing:</h2>
                <div className="productsContainer">
                    {props.data.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <img className="productImage" src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <button onClick={() => {
                                    console.log(product.title)
                                }}>See Product</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mens