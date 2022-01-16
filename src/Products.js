import axios from "axios"
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://fakestoreapi.com/products',
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response)
            setProducts(response.data)
        });
    }, [])

    return (
        <div>
            <Navbar />
            <div className="wrapper">
                <h2>Products</h2>
                <div className="productsContainer">
                    {products.map((product) => {
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

export default Products