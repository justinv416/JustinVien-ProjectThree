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

  //The test links works and is successfully called in the product component,
  // now i need to set the item data as a object in product js and set the state here.
  //Then pass that data to the shopping cart. 
  //need to push itemData to state

  const getItemData = (itemData) => {
    setCartData(itemData)
    console.log(cartData)
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:itemId" element={<Product importData={getItemData}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
