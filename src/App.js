import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/IndividualProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import FireBaseTest from './FireBaseTest';

function App() {

  const [cartData, setCartData] = useState([]);
  const [cartLength, setCartLength] = useState(0);

 const handleAddToCart = (itemData) => {
    /*Adds new item into the cart. 
    Here itemData represents the individual item that is passed in in the exportItemData 
    function in IndividualItem.js*/
    cartData.push(itemData);
    //Sets updated cart to state
    setCartData(cartData);
    //Sets cart length for badge notification
    setCartLength(cartData.length);
  };

  //Removes item from cart, itemToRemove represents the individual item in the cart.
  const handleRemoveFromCart = (itemToRemove) => {
    //Makes a copy of the cart with the spread operator
   const oldCart = [...cartData];
   //Deletes cart items with the Filter method
   const newCart = oldCart.filter(filteredItem => filteredItem !== itemToRemove);
    //Sets new cart to state with filtered(removed) items.
   setCartData(newCart);
   //Sets cart length for badge notification
    setCartLength(newCart.length);
  };

  return (
    <div>
      <Navbar itemsNum={cartLength}/>
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product handleItemData={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartData={cartData} removeFromCart={handleRemoveFromCart}/>} />
        <Route path="/test" element={<FireBaseTest />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
