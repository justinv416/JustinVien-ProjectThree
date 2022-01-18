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

  //Item data is successfully exported from product component, now i need to push the item obj into a new array and set it to state. 
  //  - Then, i need export that state array into cart component so that i can manipulate it there. 

  const getItemData = (itemData) => {
    const copy = cartData;
    console.log(copy)
    // copy.push(itemData)
    // console.log(copy.length)
    setCartData(itemData)
  }


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product exportItemData={getItemData} />} />
        <Route path="/cart" element={<Cart cartData={cartData}/>} />
      </Routes>
    </div>
  );
}

export default App;
