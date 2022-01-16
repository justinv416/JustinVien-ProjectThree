import './App.css';
import Header from './Header';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import React from "react";
import { Routes, Route } from "react-router-dom";


// const StoreView = () => {
//   return (
    
//   )
// }
        // <Header />


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
