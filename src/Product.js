import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Product = (props) => {
    const { itemId } = useParams()
    const [item, setItem] = useState([]);

    const importData = () => {
        const individualItem = {
            title: item.title,
            price: item.price,
            quantity: 1
        }
        props.importData(individualItem)
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
                    <button onClick={importData}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product