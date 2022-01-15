import axios from "axios"
import { useEffect, useState } from "react";

const Tech = () => {
     const [techProducts, setTechProducts] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://fakestoreapi.com/products/category/electronics',
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response)
            setTechProducts(response.data)
        });
    }, [])

    return (
        <div>
            <div className="wrapper">
                <h2>Shop Tech:</h2>
                <div className="productsContainer">
                    {techProducts.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <img className="productImage" src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <button>See Product</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tech