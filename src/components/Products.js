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
            setProducts(response.data)
        }).catch((err) => {
            alert("Something went wrong, please try again another time. I'll try my best to fix it.");
        })
    }, []);

    return (
        <section id="products">
            <div className="wrapper">
                <h2 className="productsHeading">Products:</h2>
                <div className="productsContainer">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <img className="productsImage" src={product.image} alt={product.title} />
                                <h3 className="productsTitle">{product.title}</h3>
                                <h4 className="productsPrice">${product.price}</h4>
                                <Link className="productLink" to={`/product/${product.id}`} productid={`${product.id}`}>
                                    View Product
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products;