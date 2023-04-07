import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { useRef } from 'react'; // Importamos el hook useRef para poder limpiar el input
import { IconButton } from '@mui/material';

import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import ExpresionPalabra from './ExpresionPalabra'; // Importamos el componente que muestra la palabra
import ExpresionBoton from './ExpresionBoton'; // Importamos el componente que muestra el boton
import { useEffect } from 'react';
import axios from 'axios';

const ExpresionCard = () => {
  const [diccionario, setDiccionario] = useState({}); // Estado para guardar el diccionario
  const [expresion, setExpresion] = useState(''); // Estado para guardar la expresión aleatoria
  const [colorBoton, setColorBoton] = useState('primary');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:8000/expresiones/all');
      const nuevoDiccionario = {};
      result.data.forEach(item => {
        nuevoDiccionario[item.expresion] = item.significado;
      });
      setDiccionario(nuevoDiccionario);
      setExpresion(diccAleatorio(nuevoDiccionario));
    };
    fetchData();
  }, []); // Se usa un array vacío como segundo parámetro para que se ejecute sólo en el montaje del componente

  const handleButtonClick = (data) => {
    if (data === expresion) {
      console.log("Correcto");
      setColorBoton('success');
    }
  };

  const diccAleatorio = (diccionario) => {
    const keys = Object.keys(diccionario);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
  };

  const expresionesPosibles = Object.keys(diccionario).filter(exp => exp !== expresion);
  const expresion1 = expresionesPosibles[Math.floor(Math.random() * expresionesPosibles.length)];
  const expresion2 = expresionesPosibles[Math.floor(Math.random() * expresionesPosibles.length)];
  const expresionList = [expresion, expresion1, expresion2];
  // crea una funcion que eliga aleatoriamente un valor de la lista expresionList y lo devuelva
  const expresionAleatoria = () => {
    const randomKey = expresionList[Math.floor(Math.random() * expresionList.length)];
    return randomKey;
  };

  return (
    <Card sx={{ margin: '0.5rem 0' }}>
      <CardContent>
        <ExpresionPalabra palabra={diccionario[expresion]} />
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
          <ExpresionBoton expresion={expresionAleatoria()} handleButtonClick={handleButtonClick} colorBoton={colorBoton} />
          <ExpresionBoton expresion={expresionAleatoria()} handleButtonClick={handleButtonClick} colorBoton={colorBoton} />
          <ExpresionBoton expresion={expresionAleatoria()} handleButtonClick={handleButtonClick} colorBoton={colorBoton} />
        </Box>
      </CardActions>
    </Card>
  );
};

export default ExpresionCard;
