import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import { useRef } from 'react'; // Importamos el hook useRef para poder limpiar el input
import { IconButton } from '@mui/material';
import Palabra from './Palabra';
import PalabraOculta from './PalabraOculta';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

/* Este código es un componente de React que muestra una tarjeta con una palabra aleatoria y un cuadro de
entrada para que el usuario adivine el significado de la palabra. Algunas de las funcionalidades del
componente incluyen: 

- Obtener una palabra aleatoria y su significado de una API.

- Comprobar si la palabra que ingresó el usuario es correcta o incorrecta.

- Limpiar el cuadro de entrada después de que el usuario haya intentado adivinar el significado de la palabra.

- Controlar el estado de la palabra oculta y mostrarla en caso de ser necesario. 

- Renderizar nuevamente el componente y obtener una nueva palabra aleatoria. */


const BasicCard = () => {
// Esta sección del código define los estados iniciales de la aplicación. 
const [palabra, setPalabra] = useState("hola"); // Establece la palabra inicial como "hola"
const [palabraOculta, setPalabraOculta] = useState(false); // Establece el estado de la palabra oculta como falso
const [palabraCorrecta, setPalabraCorrecta] = useState(false); // Establece el estado de la palabra correcta como falso
const [reload, setReload] = useState(false);

const inputRef = useRef(null); // Crea un ref para el elemento de entrada
const buttonRef = useRef(null); // Crea un ref para el botón



const [randomData, setRandomData] = useState({});


const handleRender = (event) => {
  setReload(!reload);
  inputRef.current.value = ""; // Limpia el input con el hook useRef, toma la referencia del input y le asigna un valor vacío
 
  }

useEffect(() => {
  const url = 'http://127.0.0.1:8000/palabras/all';
  const dataObj = {};

  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (const item of data) {
        dataObj[item.palabra] = item.significado;
      }
      const keys = Object.keys(dataObj);
      const randomIndex = Math.floor(Math.random() * keys.length);
      const randomKey = keys[randomIndex];
      const randomValue = dataObj[randomKey];
      const randomData = { [randomKey]: randomValue };
      setRandomData(randomData);
    })
    .catch(error => console.error(error));
}, [reload]); // El segundo argumento es un array de dependencias, si alguna de las dependencias cambia, se ejecuta el useEffect

const key = Object.keys(randomData)[0];
const value = Object.values(randomData)[0];









  const handleInputChange = (event) => {
    setPalabra(event.target.value);
  };

  const handleButtonClick = () => {
    
    if (palabra === value) {
      setPalabraCorrecta(true);
    } else {
      console.log("Incorrecto");
    // Lógica para comprobar la palabra
    console.log(randomData);
    }
   
      
  };

  // Esta función se ejecuta cuando el usuario presiona una tecla en el teclado
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {

      // Hacemos click en el botón referenciado por buttonRef.current
      buttonRef.current.click();

    }
  };



  const mostrarPalabra = () => {
   
    setPalabraOculta (!palabraOculta);
  }





  return (
    
    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <Palabra palabra = {key} />
          
        <Box sx={{ display: 'flex',justifyContent: "space-between"}}>
              <TextField
                id="outlined-basic"
                label= {key }
                variant="outlined"
                inputRef={inputRef} /* Usamos el inputRef para referenciar el input y poder limpiarlo */
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} /* Usamos el onKeyDown para que cuando se haga enter se haga click en el boton */
              />
              {palabraOculta ? <PalabraOculta palabra = {value} /> : null}
        </Box> 
      </CardContent>
      
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center"}}>
          <Button size="small" variant="contained" onClick={handleButtonClick} ref={buttonRef}> {/* Boton para comprobar la palabra, y mandar la referencia para cuando se haga enter haga check */}
            Check
          </Button>
          
          <IconButton size="small" variant="contained" onClick={handleRender}> {/* Boton para renderizar el componente y cambiar la palabra */}
            <RefreshIcon />
          </IconButton>
          
          <IconButton size="small" variant="contained" onClick={mostrarPalabra}> {/* Boton para renderizar el componente y cambiar la palabra */}
            <SearchIcon />
          </IconButton>   
        </Box>
      
      {palabraCorrecta ? <p>¡Correcto!</p> : null}
      </CardActions>
    </Card>
  );
};

  export default BasicCard;