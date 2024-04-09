import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home, Login, Signup, MyOrder }from './pages/index.js';
import { CartProvider } from './components/ContextReducer';

function App() {
  
  return (
   <>
     <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
      </>
  )
}

export default App
