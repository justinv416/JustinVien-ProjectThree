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
        })
    }, [])

    return (
        <div>
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
        </div>
    )
}

export default Products

//  useEffect(() => {
//         axios({
//             url: 'https://fakestoreapi.com/products',
//             method: 'GET',
//             dataResponse: 'json'
//         }).then((response) => {
//             if(response.ok) {
//                 setProducts(response.data)
//             } else {
//                 throw new Error("Unfortunately, this call was not successful")
//             }
//         }).catch((err) => {
//             if(err.message === "Not Found"){
//                 alert("We couldn't find the resource you were looking for. Please Try again another time.")
//             } else {
//                 alert("Something else went wrong, I'll try my best to fix it.")
//             }
//         })
//     }, [])

// useEffect(() => {
//         axios({
//             url: 'https://fakestoreapi.com/products',
//             method: 'GET',
//             dataResponse: 'json'
//         }).then((response) => {
//             setProducts(response.data)
//         })
//     }, [])