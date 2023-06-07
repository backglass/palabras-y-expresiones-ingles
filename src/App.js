import React, { useState, useEffect } from 'react';


import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom'; 

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ButtonMenuApp from './components/ButtonMenuApp/ButtonMenuPalabras';

function App() {


  return (

    <div>
      <NavBar />
        
      <Outlet />

      
    </div>

      
  )
}

export default App;