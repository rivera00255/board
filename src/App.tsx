import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import './index.css';
import ReviewList from './pages/ReviewList';
import OrderInfo from './pages/OrderInfo/Index';
import OrderList from './pages/OrderList';
import Login from './pages/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/order" element={<OrderInfo />} />
          <Route path="/review" element={<ReviewList />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
