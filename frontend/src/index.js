import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import List from './components/List';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


