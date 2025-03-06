
/* Se trata de un componente de React que utiliza el componente BasicCard para mostrar tarjetas de estudio
dinámicamente, en base a la lección seleccionada en el parámetro de la URL "id". Incluye un botón
de actualización para volver a la parte superior de la página. */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicCard from '../BasicCard/BasicCard';
import Footer from '../Footer/Footer';

import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


function Palabras() {
//* Esté parametro se pasa desde el componente ButtonMenuApp.js
//* Obtenemos el valor del parámetro "id" de la URL que sera lección 1, 2 o 3 etc
//* Dependiendo del valor de "id" se muestran las palabras de la lección correspondiente
//* Si el valor es 2 se muestran las palabras de la lección 2

  const { id } = useParams(); // Obtener el valor del parámetro "id"
  console.log(id);
  let [leccion, setLeccion] = useState(id); // Se inicializa el estado con el valor del parámetro "id"
 
  // Si el parámetro es "Lección 1" se cambia a "all" para que se muestren todas las palabras
  if (leccion === "Lección 1") {
    leccion = "1";
  }
  if (leccion === "Lección 2") {
    leccion = "2";
  }
  if (leccion === "Lección 3") {
    leccion = "3";
  }
  if (leccion === "Lección 4") {
    leccion = "4";
  }
  if (leccion === "Lección 5") {
    leccion = "5";
  }
  if (leccion === "Lección 6") {
    leccion = "6";
  }
  if (leccion === "Lección 7") {
    leccion = "7";
  }
  if (leccion === "Lección 8") {
    leccion = "8";
  }
  if (leccion === "Lección 9") {
    leccion = "9";
  }
  if (leccion === "Lección 10") {
    leccion = "10";
  }
  if (leccion === "Lección 11") {
    leccion = "11";
  }
  if (leccion === "Lección 12") {
    leccion = "12";
  }
  if (leccion === "Lección 13") {
    leccion = "13";
  }
  if (leccion === "Lección 14") {
    leccion = "14";
  }
  if (leccion === "Lección 15") {
    leccion = "15";
  }
  if (leccion === "Lección 16") {
    leccion = "16";
  }
  if (leccion === "Lección 17") {
    leccion = "17";
  }
  if (leccion === "Lección 18") {
    leccion = "18";
  }
  if (leccion === "Lección 19") {
    leccion = "19";
  }
  if (leccion === "Lección 20") {
    leccion = "20";
  }
  if (leccion === "Lección 21") {
    leccion = "21";
  }
  if (leccion === "Lección all") {
    leccion = "all";
  }

  
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {id}
            </Typography>
  
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md"  >
          {/* End hero unit */}
          
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
            <BasicCard id ={leccion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <BasicCard id = {leccion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <BasicCard id = {leccion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <BasicCard id = {leccion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <BasicCard id = {leccion} sx={{padding: "30px"}}/>
            </Grid>
            <BasicCard id = {leccion} sx={{padding: "30px"}}/>
     
          </Grid>
          <Grid container justifyContent="center">
          {/* Recarga la página y el scroll se pone al principio */}
          <IconButton sx={{ mt: 2, mb: 2,fontSize: '20rem'}} onClick={() => {
            window.location.reload();
            window.scrollTo(0,0);
          }}>             
              <RefreshIcon />
            </IconButton>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default Palabras;

