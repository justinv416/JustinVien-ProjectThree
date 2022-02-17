//CSS file
import './App.css';
//Components
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/IndividualProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
//Hooks
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import firebase from './Firebase'

function App() {

  const [cartData, setCartData] = useState([]);
  const [cartLength, setCartLength] = useState(0);


  useEffect(() => {
    //variable that holds our database details
    const database = getDatabase(firebase);
    //variable that makes reference to our database
    const dbRef = ref(database, 'cart/');
    //Event listener for changes to database. 
    onValue(dbRef, (response) => {
      //Response from database
      const data = response.val();
      //Creating an empty array to item data
      const newState = []
      //Lopping through the data object
      for (let key in data) {
        //Pushes each set of data into the newState
        newState.push({name: key, data: data[key]})
      }
      //Sets cartData to newState
      setCartData(newState)
      setCartLength(newState.length);
    })
  }, [])

  const handleAddToCart = (itemToAdd) => {

    /*Adds new item into the cart. 
    itemToAdd represents the individual item that is passed in from the exportItemData 
    function in IndividualItem.js*/
    const database = getDatabase(firebase);
    const dbRef = ref(database, 'cart/');
    //Pushes the cart item to the database.
    push(dbRef, itemToAdd);
  };

  //Removes item from cart, itemToRemove represents the individual item in the cart.
  const handleRemoveFromCart = (itemToRemove) => {
    const database = getDatabase(firebase);
    //Reference to the item to remove
    const dbRef = ref(database, `cart/${itemToRemove}`);
    remove(dbRef)
  };

  return (
    <div>
      <Navbar itemsNum={cartLength}/>
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product handleItemData={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartData={cartData} removeFromCart={handleRemoveFromCart}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
