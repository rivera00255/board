import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import './index.css';
import PostList from './pages/PostList';
import OrderInfo from './pages/OrderInfo/Index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderInfo />} />
        <Route path="/post" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
