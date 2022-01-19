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
    cartData.push(itemData)

    setCartData(cartData)
    //Initial calculation for grand total, wont work since all items are diff. prices
    //May .reduce method?
    for(let i = 0; i < cartData.length; i++) {
      console.log(cartData[i].price * cartData.length)
    }
  }


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product exportItemData={getItemData} />} />
        <Route path="/cart" element={<Cart cartData={cartData}/>} />
      </Routes>
    </div>
  );
}

export default App;
