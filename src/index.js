import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Palabras from "./components/pages/Palabras"
import Expresiones from "./components/pages/Expresiones"
import AñadirPalabras from './components/pages/AñadirPalabras';



ReactDOM.render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="palabras" element={<Palabras />} />
        <Route path="expresiones" element={<Expresiones />} />
        <Route path="añadir-palabra" element={<AñadirPalabras />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
