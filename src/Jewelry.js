import axios from "axios"
import { useEffect, useState } from "react";

const Jewelry = () => {
     const [jewelryProducts, setJewelryProducts] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://fakestoreapi.com/products/category/jewelery',
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response)
            setJewelryProducts(response.data)
        });
    }, [])

    return (
        <div>
            <div className="wrapper">
                <h2>Shop Jewelry:</h2>
                <div className="productsContainer">
                    {jewelryProducts.map((product) => {
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

export default Jewelry