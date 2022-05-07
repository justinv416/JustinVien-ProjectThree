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
  const [totalTest, setTotalTest] = useState([])

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, 'cart/');
    //Event listener for changes to database. 
    onValue(dbRef, (response) => {
      const data = response.val();
      //Creating an empty array to item data
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
        const grandTotal = total.reduce((prevAmount, currentAmount) => prevAmount + currentAmount)
        setTotalTest(grandTotal)
      } else {
        setTotalTest(0)
      }
    })
  }, [])

  const handleAddToCart = (itemToAdd) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, 'cart/');
    push(dbRef, itemToAdd);
  };

  //Removes item from cart, itemToRemove represents the individual item in the cart.
  const handleRemoveFromCart = (itemToRemove) => {
    const database = getDatabase(firebase);
    //Reference to the item to remove
    const dbRef = ref(database, `cart/${itemToRemove}`);
    remove(dbRef)
  };

  return (
    <div>
      <Navbar itemsNum={cartLength}/>
      <Routes>
        <Route path="/" element={<Home className="homeRoute"/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Product handleItemData={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartData={cartData} removeFromCart={handleRemoveFromCart} gTotal={totalTest} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
