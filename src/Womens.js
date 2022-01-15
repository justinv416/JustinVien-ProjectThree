import axios from "axios"
import { useEffect, useState } from "react";

const Womens = () => {
     const [womensProducts, setWomensProducts] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://fakestoreapi.com/products/category/women\'s clothing',
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response)
            setWomensProducts(response.data)
        });
    }, [])

    return (
        <div className="wrapper">
            <h2>Shop Womens:</h2>
            {womensProducts.map((product) => {
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

export default Womens