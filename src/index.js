import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Palabras from "./components/pages/Palabras"
import Expresiones from "./components/pages/Expresiones"
import AñadirPalabras from './components/pages/AñadirPalabras';
import AñadirExpresion from './components/pages/AñadirExpresion';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="palabras" element={<Palabras />} />
        <Route path="expresiones" element={<Expresiones />} />
        <Route path="añadir-palabra" element={<AñadirPalabras />} />
        <Route path="añadir-expresion" element={<AñadirExpresion />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
