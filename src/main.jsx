import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from './components/Layout.jsx';
import Cart from './components/Cart.jsx';
import AllCars from './components/allcars/AllCars.jsx';
import { NavBarProvider } from './contexts/NavBarContext.jsx';
import CarInfo from './components/allcars/CarInfo.jsx';
import { Outlet } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBarProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Layout />} />
            <Route path='allcars' element={<AllCars />} />
            <Route path=":id" element={<CarInfo />} />
            <Route path='cart/:id' element={<Cart />} />
          </Route>
        </Routes>
      </NavBarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
