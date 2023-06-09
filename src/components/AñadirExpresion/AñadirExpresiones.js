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

const enviarDatos = (expresion, significado,leccion) => {

  //return axios.post('https://127.0.0.1:8000/expresiones/nueva', { expresion, significado, leccion });
  return axios.post('https://185.117.44.54:8000/expresiones/nueva', { expresion, significado, leccion });
}

const AñadirExpresiones = () => {
  const [expresion, setexpresion] = useState('');
  const [significado, setSignificado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [leccion, setLeccion] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    enviarDatos(expresion, significado,leccion)
      .then(() => {
        setMensaje('Expresion añadida');
        setexpresion('');
        setSignificado('');
        setLeccion('');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Palabra palabra="Expresion a añadir" />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
          <TextField
            id="outlined-basic"
            label="palabra" 
            variant="outlined"
            name="palabra"
            value={expresion}
            onChange={(event) => setexpresion(event.target.value)}

          />
          <Box sx={{ height: 16 }} />
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
          <Button size="small" variant="contained" onClick={handleSubmit}>
            Enviar
          </Button>
          {mensaje && <Typography variant="subtitle1">{mensaje}</Typography>}
        </Box>
      </CardActions>
    </Card>
  );
};

export default AñadirExpresiones;