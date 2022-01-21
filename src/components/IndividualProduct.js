import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Product = (props) => {
    //Destructures product id from Products.js to be used in api call.
    const { productid } = useParams();
    //Sets individual item as state.
    const [item, setItem] = useState([]);

    //Function that stores item data as an object that when clicked will pass it back 
    // up to app.js and set it as state.
    const handleItemData = () => {
        const individualItem = {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: 1
        };

        props.handleItemData(individualItem);
    };

    useEffect(() => {
        axios({
            url:`https://fakestoreapi.com/products/${productid}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setItem(response.data)
        }).catch((err) => {
            alert("Something went wrong, please try again another time. I'll try my best to fix it.");
        });
    }, [productid]);

    return (
        <section id='individualItem'>
            <div className='itemContainer'>
                <div className="wrapper itemWrapper">
                    <img className="itemImage" src={item.image} alt={item.title} />
                    <div className="itemInfo">
                        <h3 className='itemTitle'>{item.title}</h3>
                        <h4 className='itemPrice'>Price: ${item.price}</h4>
                        <p className='itemDescription'>{item.description}</p>
                        {/* On click, the item is pushed to a stateful array that is held in App.js */}
                        <button className="addToCartButton" onClick={handleItemData}>Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;