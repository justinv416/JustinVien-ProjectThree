import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="wrapper">
                <h2>Products</h2>
                <div className="productsContainer">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <img className="productImage" src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <h4>${product.price}</h4>
                                <Link to={`/product/${product.id}`} itemId={`${product.id}`}>
                                    <button>View Product</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products