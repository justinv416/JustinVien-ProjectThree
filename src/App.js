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
  const [total, setTotal] = useState([])

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, 'cart/');
    //Event listener for changes to database. 
    onValue(dbRef, (response) => {
      const data = response.val();
      const newState = []
      const total = []
      //Lopping through the data object
      for (let key in data) {
        //Pushes each set of data into the newState
        newState.push({name: key, data: data[key]})
      }
      //Sets cartData to newState
      setCartData(newState)
      setCartLength(newState.length);

      //Total calculation
      for (let prop in data) {
        total.push(data[prop].price)
      }

      if(total.length > 0) {
        const grandTotal = total.reduce((prevAmount, currentAmount) => prevAmount + currentAmount).toFixed(2)
        setTotal(grandTotal)
      } else {
        setTotal(0)
      }
    })
  }, [])

  const handleAddToCart = (itemToAdd) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, 'cart/');
    push(dbRef, itemToAdd);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `cart/${itemToRemove}`);
    remove(dbRef)
  };

  return (
    <div>
      <Navbar itemsNum={cartLength}/>
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product handleItemData={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartData={cartData} removeFromCart={handleRemoveFromCart} grandTotal={total} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
