import './App.css';
import Header from './Header';
import Products from './Products';
import Mens from './Mens';
import Womens from './Womens';
import Jewelry from './Jewelry'
import Tech from './Tech';
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
        axios({
            url: 'https://fakestoreapi.com/products/category/men\'s clothing',
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response)
            setData(response.data)
        });
    }, [])

  console.log(data)
  return (
    <div>
      <Header />
      {/* <Products /> */}
      <Mens data={data} />
      {/* <Womens />
      <Jewelry />
      <Tech /> */}
      {/* Maybe pass in props in shopping cart to add price and title */}
      <ShoppingCart />
    </div>
  );
}

export default App;
