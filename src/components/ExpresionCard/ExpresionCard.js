import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Footer from '../Footer/Footer';


import { useState } from 'react';

import { useRef } from 'react'; // Importamos el hook useRef para poder limpiar el input



import Box from '@mui/material/Box';

import ExpresionPalabra from './ExpresionPalabra'; // Importamos el componente que muestra la palabra
import ExpresionBoton from './ExpresionBoton'; // Importamos el componente que muestra el boton
import { useEffect } from 'react';
import axios from 'axios';


/* Este código define un componente de React llamado ExpresionCard que muestra una tarjeta con una palabra en español y tres botones, uno de ellos es la palabra correcta y los otros dos son palabras
aleatorias diferentes a la correcta. Cuando se hace clic en uno de los botones, el componente 
cambia el color del botón a "success" si es que la respuesta dada fue correcta.


El componente utiliza dos hook de React, useState y useRef, y también importa varios componentes de
Material-UI como Card, CardContent y CardActions. Además, también utiliza useEffect para realizar una
petición HTTP a un servidor local y obtener una lista de expresiones y sus significados para crear
un diccionario que se utiliza más adelante para mostrar las palabras en la tarjeta. */

const ExpresionCard = ({ id }) => {
  const [diccionario, setDiccionario] = useState({}); // Estado para guardar el diccionario
  const [expresion, setExpresion] = useState(''); // Estado para guardar la expresión aleatoria
  const [colorBoton, setColorBoton] = useState('primary');

  useEffect(() => {
    const fetchData = async () => {
      // Si el valor de id es "all" se hace una petición para obtener todas las palabras
      // Si el valor de id es un número se hace una petición para obtener las palabras del número de lección	
      let url = "";
      if (id === "all") {
        url = `https://185.117.46.78:8000/expresiones/all`;
      } else {
        url = `https://185.117.46.78:8000/expresiones/leccion/${id}`;
      }
      const result = await axios.get(url); // Se hace una petición usando el id de la lección o "all"
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
