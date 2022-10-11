import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import './index.css';
import PostList from './pages/PostList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
