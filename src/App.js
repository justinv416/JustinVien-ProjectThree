import './App.css';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Navbar from './Navbar';
import Cart from './Cart';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [cartData, setCartData] = useState([])
  const [total, setTotal] = useState(0)

  

 const getItemData = (itemData) => {
    //Adds new item into the cart
    cartData.push(itemData)
    //Sets updated cart to state
    setCartData(cartData)
  }

  const removeFromCart = (product) => {
   const oldCart = [...cartData]
   const newCart = oldCart.filter(filteredProduct => filteredProduct !== product)
   setCartData(newCart)
   console.log(newCart)
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product exportItemData={getItemData} />} />
        <Route path="/cart" element={<Cart cartData={cartData} test={removeFromCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
