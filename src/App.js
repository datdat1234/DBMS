import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Product } from './pages/ProductPage';
import { Order } from './pages/OrderPage';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;