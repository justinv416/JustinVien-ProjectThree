import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Product = () => {
    const { id } = useParams()
    console.log(id)
    const [item, setItem] = useState([])

    useEffect(() => {
        axios({
            url:`https://fakestoreapi.com/products/${id}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response);
            setItem(response.data)
        });
    }, []);

    return (
        <div className='itemContainer'>
            <div className="wrapper itemWrapper">
                <img className="item" src={item.image} alt={item.title} />
                <div className="itemInfo">
                    <h3>{item.title}</h3>
                    <h4>${item.price}</h4>
                    <p>{item.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product