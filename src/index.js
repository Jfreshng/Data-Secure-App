import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RecoveryPage from './routes/RecoveryPage'
import CloudPage from './routes/CloudPage';
import ContactPage from './routes/ContactPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/recovery' element={<RecoveryPage />}></Route>
      <Route path='/cloud' element={<CloudPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
    </Routes>
  </BrowserRouter>
);

