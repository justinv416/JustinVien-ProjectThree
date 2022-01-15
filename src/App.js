import './App.css';
import Header from './Header';
import Products from './Products';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Products />
      </div>
    </Router>
  );
}

export default App;
