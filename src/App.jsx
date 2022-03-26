import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { ShopProvider } from './components/ShopContext';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <ShopProvider>
      <Router>
        <Navbar />  
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
}

export default App;
