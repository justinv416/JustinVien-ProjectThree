import axios from "axios"
import { useEffect } from "react";

const Products = () => {
    useEffect(() => {
        axios({
            url: 'https://fakestoreapi.com/products',
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response)
        });
    })

    return (
        <div>
            <h2>Products</h2>
        </div>
    )
}

export default Products