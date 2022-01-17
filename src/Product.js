import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Product = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState([]);
    const handleAddToCart = () => {
        console.log(item)
    }

    useEffect(() => {
        axios({
            url:`https://fakestoreapi.com/products/${itemId}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response);
            setItem(response.data)
        });
    }, [itemId]);

    return (
        <div className='itemContainer'>
            <div className="wrapper itemWrapper">
                <img className="item" src={item.image} alt={item.title} />
                <div className="itemInfo">
                    <h3 className='itemTitle'>{item.title}</h3>
                    <h4>${item.price}</h4>
                    <p>{item.description}</p>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product