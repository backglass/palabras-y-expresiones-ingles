import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useState } from 'react';


import Palabra from './Palabra';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import axios from 'axios';

/* El código importa varios componentes de Material-UI, como Card, CardContent, Button, TextField,
Typography y Box, así como la biblioteca axios para hacer solicitudes HTTP.

La función enviarDatos toma una nueva palabra y su significado como parámetros y envía una solicitud
HTTP de tipo post al servidor para agregar la nueva palabra a la base de datos

El componente AñadirCard inicializa tres variables de estado, palabra, significado y mensaje,
para realizar un seguimiento de los valores de entrada y mostrar mensajes de éxito / error. 

La función handleSubmit se llama cuando se envía el formulario y evita la acción predeterminada de
envío del formulario. Luego llama a la función enviarDatos con los valores actuales de palabra y
significado, y si la solicitud HTTP es exitosa, actualiza la variable de estado mensaje con un 
mensaje de éxito y borra los campos de entrada.Si la solicitud falla, registra el error en la consola.

Finalmente, el componente renderiza un Card de Material-UI con dos campos de entrada para agregar
nuevas palabras y sus significados, un botón de envío y un componente Typography para mostrar
mensajes de éxito / error. */




// función para hacer una petición POST con axios
const enviarDatos = (palabra, significado) => {
  return axios.post('https://185.117.44.54:8000/palabras/nueva', { palabra, significado });
}

// componente AñadirCard
const AñadirCard = () => {
  // estados de las variables palabra, significado y mensaje
  const [palabra, setPalabra] = useState('');
  const [significado, setSignificado] = useState('');
  const [mensaje, setMensaje] = useState('');

  // función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // prevenir comportamiento por defecto del formulario
    enviarDatos(palabra, significado)
      .then(() => {
        setMensaje('Palabra añadida');
        setPalabra('');
        setSignificado('');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Palabra palabra="Palabra a añadir" />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
          {/* campo de texto para la palabra */}
          <TextField
            id="outlined-basic"
            label="palabra" 
            variant="outlined"
            name="palabra"
            value={palabra}
            onChange={(event) => setPalabra(event.target.value)}
          />
          <Box sx={{ height: 16 }} />

          {/* campo de texto para el significado */}
          <TextField
            id="outlined-basic"
            label="significado" 
            variant="outlined"
            name="significado"
            value={significado}
            onChange={(event) => setSignificado(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSubmit(event);
                document.getElementsByName('palabra')[0].focus();
              }
            }}
          />
        </Box> 
      </CardContent>
      
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center", width: '100%' }}>
          {/* botón de envío del formulario */}
          <Button size="small" variant="contained" onClick={handleSubmit}>
            Enviar
          </Button>

          {/* mensaje de confirmación */}
          {mensaje && <Typography variant="subtitle1">{mensaje}</Typography>}
        </Box>
      </CardActions>
    </Card>
  );
};

export default AñadirCard;
