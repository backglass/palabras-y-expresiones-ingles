import React from 'react'
import { Button } from '@mui/material'

export const ExpresionBoton = ({ expresion , handleButtonClick, colorBoton }) => {

  
  const handleClick = () => {
/*  La función no recibe argumentos. Dentro de la función, se llama a otra función llamada 
    handleButtonClick y se le pasa un argumento llamado "expresion".
    El valor de "expresion" no está definido en el código que se muestra, por lo que se supone
    que se ha definido en otro lugar del programa.  */


    handleButtonClick(expresion);
    
  };

  //* onClick={handleButtonClick} // Esta es la forma de pasarle la funcion como prop y ejecutarla desde el componente ExpresionCard
  return (
    <Button variant="contained" color={colorBoton} sx={{width: '100%', textTransform: 'none', margin: '0.2rem 0'}} onClick={handleClick}>
        {expresion}
    </Button>
  )
}

export default ExpresionBoton