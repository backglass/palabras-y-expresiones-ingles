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

const diccionario = {
  "Hablar en voz baja": "talk quietly",
  "Andar muy despacio": "Move very quietly",
  "Invitar a alguien": "Having someone over",
  "Sea o no": "whether or not",
}


const diccAleatorio = () => {
  const keys = Object.keys(diccionario);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return randomKey;
}




const ExpresionCard = () => {
  const [expresion, setExpresion] = useState(diccAleatorio()); // Estado para guardar la palabra que se escribe en el input
  const [colorBoton, setColorBoton] = useState('primary');

  const handleButtonClick = (data) => {
    if (data === expresion) {
      console.log("Correcto")
      setColorBoton('success')
    }
  }
  const expresionesPosibles = Object.keys(diccionario).filter(exp => exp !== expresion);
  const expresion1 = expresionesPosibles[Math.floor(Math.random() * expresionesPosibles.length)];
  const expresion2 = expresionesPosibles[Math.floor(Math.random() * expresionesPosibles.length)];


  return (
    
    
    <Card sx={{ margin: '0.5rem 0' }}>
      <CardContent>
          <ExpresionPalabra palabra = {diccionario[expresion]} />
          
        <Box sx={{ display: 'flex',justifyContent: "space-between"}}>

        </Box> 
      </CardContent>
      
      <CardActions>
      <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
      <ExpresionBoton expresion={expresion} handleButtonClick={handleButtonClick} colorBoton={colorBoton} /> 
      <ExpresionBoton expresion={expresion1} handleButtonClick={handleButtonClick} colorBoton={colorBoton}/>
      <ExpresionBoton expresion={expresion2} handleButtonClick={handleButtonClick} colorBoton={colorBoton}/>
  

          
        </Box>
      

      </CardActions>
    </Card>
  );
};

  export default ExpresionCard;