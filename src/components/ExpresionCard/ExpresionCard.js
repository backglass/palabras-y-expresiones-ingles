import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';


import { useRef } from 'react'; // Importamos el hook useRef para poder limpiar el input
import { IconButton } from '@mui/material';

import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import ExpresionPalabra from './ExpresionPalabra'; // Importamos el componente que muestra la palabra
import ExpresionBoton from './ExpresionBoton'; // Importamos el componente que muestra el boton
import { useState, useEffect } from 'react';
import axios from 'axios';

const ExpresionCard = () => {
  const [expresion, setExpresion] = useState('');
  const [expresionesPosibles, setExpresionesPosibles] = useState({});
  const [colorBoton, setColorBoton] = useState('primary');

  useEffect(() => {
    const obtenerExpresiones = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/expresiones/all');
        const data = await response.json();

        //Obtenemos una expresión aleatoria
        const expresionAleatoria = data[Math.floor(Math.random() * data.length)];
        setExpresion(expresionAleatoria.significado);

        //Filtramos las expresiones para excluir la expresión aleatoria
        const expresionesFiltradas = data.filter((exp) => exp.significado !== expresionAleatoria.significado);

        //Tomamos dos expresiones al azar de las expresiones filtradas
        const expresion1 = expresionesFiltradas[Math.floor(Math.random() * expresionesFiltradas.length)];
        const expresion2 = expresionesFiltradas[Math.floor(Math.random() * expresionesFiltradas.length)];

        //Actualizamos el estado con las expresiones posibles en un diccionario
        setExpresionesPosibles({
          [expresionAleatoria.significado]: expresionAleatoria.expresion,
          [expresion1.significado]: expresion1.expresion,
          [expresion2.significado]: expresion2.expresion
        });
        
      } catch (error) {
        console.error('Error al obtener las expresiones:', error);
      }
    };

    obtenerExpresiones();
  }, []);

  const handleButtonClick = (data) => {
    if (data === expresionesPosibles[expresion]) {
      console.log('Correcto');
      setColorBoton('success');
    } else {
      console.log('Incorrecto');
      setColorBoton('error');
    }
    console.log(data);
    console.log(expresion);
  };

  return (
    <Card sx={{ margin: '0.5rem 0' }}>
      <CardContent>
        <ExpresionPalabra palabra={expresion} />
      </CardContent>

      <CardActions>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
          {Object.keys(expresionesPosibles).map((key) => {
            const expresionValue = expresionesPosibles[key];
            return (
              <ExpresionBoton
                key={key}
                expresion={expresionValue}
                handleButtonClick={handleButtonClick}
                colorBoton={colorBoton}
              />
            );
          })}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ExpresionCard;






