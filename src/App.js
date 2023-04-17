
import { Form } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './componets/Nav';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route children path='/' element={<Home />} />
      <Route children path='/shop' element={<Shop />} />
      <Route children path='/cart' element={<Cart />} />
      
      
      </Routes>
      
    </div>
  );
}

export default App;
