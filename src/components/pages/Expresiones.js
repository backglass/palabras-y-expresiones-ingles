
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpresionCard from '../ExpresionCard/ExpresionCard';
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


const theme = createTheme();

function Expresiones() {
  const { id } = useParams(); // Obtener el valor del parámetro "id"
  console.log(id);

  let [expresion, setExpresion] = useState(id); // Se inicializa el estado con el valor del parámetro "id"
 
  // Si el parámetro es "Lección 1" se cambia a "all" para que se muestren todas las palabras
  if (expresion === "Expresión 1") {
    expresion = "1";
  }
  if (expresion === "Expresión 2") {
    expresion = "2";
    
  }
  if (expresion === "Expresión 3") {
    expresion = "3";
    
  }
  if (expresion === "Expresión 4") {
    expresion = "4";
  }
  if (expresion === "Expresión 5") {
    expresion = "5";
  }
  if (expresion === "Expresión 6") {
    expresion = "6";
  }
  if (expresion === "Expresión 7") {
    expresion = "7";
  }
  if (expresion === "Expresión 8") {
    expresion = "8";
  }
  if (expresion === "Expresión 9") {
    expresion = "9";
  }
  if (expresion === "Expresión 10") {
    expresion = "10";
  }
  if (expresion === "Expresión 11") {
    expresion = "11";
  }
  if (expresion === "Expresión 12") {
    expresion = "12";
  }
  if (expresion === "Expresión 13") {
    expresion = "13";
  }
  if (expresion === "Expresión 14") {
    expresion = "14";
  }
  if (expresion === "Expresión 15") {
    expresion = "15";
  }
  if (expresion === "Expresión 16") {
    expresion = "15";
  }
  if (expresion === "Expresión 17") {
    expresion = "17";
  }
  if (expresion === "Expresión all") {
    expresion = "all";
  }

  console.log(expresion);
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
            <ExpresionCard id ={expresion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ExpresionCard id ={expresion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ExpresionCard id ={expresion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ExpresionCard id ={expresion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ExpresionCard id ={expresion} sx={{padding: "30px"}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ExpresionCard id ={expresion} sx={{padding: "30px"}}/>
            </Grid>
     
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
      <Footer/> 
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Expresiones;

