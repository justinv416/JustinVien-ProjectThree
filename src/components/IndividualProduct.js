import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Product = (props) => {
    const { productid } = useParams()
    const [item, setItem] = useState([]);

    //Function that stores item data as an object that when clicked will pass it back 
    // up to app.js and set it as state.
    const exportItemData = () => {
        const individualItem = {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: 1
        }
        props.exportItemData(individualItem)
    }

    useEffect(() => {
        axios({
            url:`https://fakestoreapi.com/products/${productid}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setItem(response.data)
        });
    }, [productid]);

    return (
        <div className='itemContainer'>
            <div className="wrapper itemWrapper">
                <img className="itemImage" src={item.image} alt={item.title} />
                <div className="itemInfo">
                    <h3 className='itemTitle'>{item.title}</h3>
                    <h4 className='itemPrice'>${item.price}</h4>
                    <p className='itemDescription'>{item.description}</p>
                    <button className="addToCartButton" onClick={exportItemData}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product