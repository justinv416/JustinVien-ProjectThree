import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/IndividualProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [cartData, setCartData] = useState([])
  const [cartLength, setCartLength] = useState(0)
  // const [total, setTotal] = useState(0)

 const handleAddToCart = (itemData) => {
    //Adds new item into the cart
    cartData.push(itemData)
    //Sets updated cart to state
    setCartData(cartData)
    //Sets cart length for badge notification
    setCartLength(cartData.length)
  }

  const handleRemoveFromCart = (product) => {
    //Makes a copy of the cart with the spread operator
   const oldCart = [...cartData];
   //Deletes cart items with the Filter method
   const newCart = oldCart.filter(filteredProduct => filteredProduct !== product)
    //Sets new cart to state with filtered(removed) items.
   setCartData(newCart)
   //Sets cart length for badge notification
    setCartLength(newCart.length)
  }




  return (
    <div>
      <Navbar itemsNum={cartLength}/>
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product exportItemData={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartData={cartData} removeFromCart={handleRemoveFromCart}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//Todo: total calculation functionality