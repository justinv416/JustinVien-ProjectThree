import './App.css';
import Header from './Header';
import Products from './Products';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';


function App() {
  return (
    <router>
      <div>
        <Header />
        <Products />
      </div>
    </router>
  );
}

export default App;
