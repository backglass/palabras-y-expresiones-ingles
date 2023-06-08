import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { IconButton } from '@mui/material';
import Palabra from './Palabra';
import PalabraOculta from './PalabraOculta';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';


const BasicCard = ({id}) => {
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
  };

  useEffect(() => {
    const url = `https://185.117.44.54:8000/palabras/leccion/${id}`;
    const dataObj = {};

    fetch(url, { rejectUnauthorized: false })
      .then(response => response.json())
      .then(data => {
        for (const item of data) {
          dataObj[item.palabra.toLowerCase()] = item.significado.toLowerCase(); // Convierte las palabras a minúsculas antes de guardarlas en el objeto
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
    const lowercaseInput = event.target.value.toLowerCase().trim(); // Convierte el valor ingresado a minúsculas y elimina los espacios en los extremos
    setPalabra(lowercaseInput);
  };

  const handleButtonClick = () => {
    const lowercaseValue = value.toLowerCase();
    if (palabra === lowercaseValue) {
      setPalabraCorrecta(true);
    } else {
      console.log("Incorrecto");
      console.log(randomData);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };

  const mostrarPalabra = () => {
    setPalabraOculta(!palabraOculta);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Palabra palabra={key} />
        <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
          <TextField
            id="outlined-basic"
            label={key}
            variant="outlined"
            autoComplete="off"
            inputRef={inputRef} // Usamos el inputRef para referenciar el input y poder limpiarlo
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Usamos el onKeyDown para que cuando se haga enter se haga click en el botón
          />
          {palabraOculta ? <PalabraOculta palabra={value} /> : null}
        </Box>
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
          <Button size="small" variant="contained" onClick={handleButtonClick} ref={buttonRef}> {/* Botón para comprobar la palabra, y mandar la referencia para cuando se haga enter haga check */}
            Check
          </Button>
          <IconButton size="small" variant="contained" onClick={handleRender}> {/* Botón para renderizar el componente y cambiar la palabra */}
            <RefreshIcon />
          </IconButton>
          <IconButton size="small" variant="contained" onClick={mostrarPalabra}> {/* Botón para renderizar el componente y cambiar la palabra */}
            <SearchIcon />
          </IconButton>
        </Box>
        {palabraCorrecta ? <p style={{color: 'green'}}>¡Correcto!</p> : null}
      </CardActions>
    </Card>
  );
};

export default BasicCard;
