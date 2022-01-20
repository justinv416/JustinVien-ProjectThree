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
  const [total, setTotal] = useState(0)

 const getItemData = (itemData) => {
    //Adds new item into the cart
    cartData.push(itemData)
    //Sets updated cart to state
    setCartData(cartData)
    setCartLength(cartData.length)
  }

  const removeFromCart = (product) => {
    //Makes a copy of the cart with the spread operator
   const oldCart = [...cartData];
   //Deletes cart items with the Filter method
   const newCart = oldCart.filter(filteredProduct => filteredProduct !== product)
    //Sets new cart to state with filtered(removed) items.
   setCartData(newCart)
    setCartLength(newCart.length)
  }


  return (
    <div>
      <Navbar itemsNum={cartData.length}/>
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product exportItemData={getItemData} />} />
        <Route path="/cart" element={<Cart cartData={cartData} test={removeFromCart}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//TODO: pass cartData or newCart.length to badge in navbar