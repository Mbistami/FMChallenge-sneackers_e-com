import './App.css';
import { Divider } from '@mui/material';
import Navbar from './components/Navbar';
import Article from './components/Article'
import CartProvider from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Divider variant="middle" />
        <Article />
      </CartProvider>
    </div>
  );
}

export default App;
