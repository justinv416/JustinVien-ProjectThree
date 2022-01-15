import axios from "axios"
import { useEffect, useState } from "react";

const Mens = () => {
     const [mensProducts, setMensProducts] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://fakestoreapi.com/products/category/men\'s clothing',
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response)
            setMensProducts(response.data)
        });
    }, [])

    return (
        <div className="wrapper">
            <h2>Shop Mens:</h2>
            {mensProducts.map((product) => {
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

export default Mens