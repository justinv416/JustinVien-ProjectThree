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
import { getDatabase, ref, onValue, push, remove, set } from 'firebase/database';
import firebase from './Firebase'

function App() {

  const [cartData, setCartData] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    //variable that holds our database details
    const database = getDatabase(firebase);
    //variable that makes reference to our database
    const dbRef = ref(database, 'cart/');
    onValue(dbRef, (response) => {
      const data = response.val();
      const newState = []
      for (let key in data) {
        newState.push(data[key])
      }
      setCartData(newState)
      console.log(newState)
    })
    // setCartData(data)
  }, [])

  const handleAddToCart = (itemToAdd) => {
    /*Adds new item into the cart. 
    Here itemData represents the individual item that is passed in in the exportItemData 
    function in IndividualItem.js*/
    const database = getDatabase(firebase);
    const dbRef = ref(database, 'cart/');
    //This managed to push the cartData to the database
    // cartData.push(itemToAdd);
    push(dbRef, itemToAdd);
    //Sets updated cart to state
    //Sets cart length for badge notification
    setCartLength(cartData.length);
    console.log(itemToAdd)
    console.log(cartData)
  };

  //Removes item from cart, itemToRemove represents the individual item in the cart.
  const handleRemoveFromCart = (itemToRemove) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    //Makes a copy of the cart with the spread operator
   const oldCart = [...cartData];
   //Deletes cart items with the Filter method
   const newCart = oldCart.filter(filteredItem => filteredItem !== itemToRemove);
    //Sets new cart to state with filtered(removed) items.
   setCartData(newCart);
   //Sets cart length for badge notification
    setCartLength(newCart.length);
    console.log(itemToRemove)
    //This removes everything from the database but currently it removes everything
    remove(dbRef, `/${itemToRemove}`)
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
