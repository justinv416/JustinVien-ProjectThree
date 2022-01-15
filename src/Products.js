import axios from "axios"
import { useEffect, useState } from "react";

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
            <h2>Products</h2>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <img className="productImage" src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <button>See Product</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products