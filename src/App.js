import './App.css';
import Header from './Header';
import Products from './Products';
import Mens from './Mens';
import Womens from './Womens';
import Jewelry from './Jewelry'
import Tech from './Tech';

function App() {
  return (
    <div>
      <Header />
      {/* <Products /> */}
      <Mens />
      <Womens />
      <Jewelry />
      <Tech />
    </div>
  );
}

export default App;
