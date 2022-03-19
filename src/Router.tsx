import { Routes, Route } from 'react-router-dom';

import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import App from './App';

export const Router = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Home />} />
      <Route path="checkout" element={<Cart />} />
      <Route path="product/:id" element={<ProductDetails />} />
    </Route>
  </Routes>
);
