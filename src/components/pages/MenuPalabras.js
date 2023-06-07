import React, { useState, useEffect } from 'react';
import ButtonMenuApp from '../ButtonMenuApp/ButtonMenuPalabras';

// Este componente es el menú de las lecciones de palabras, se carga en la ruta /palabras
function MenuPalabras() {


  return (

    <div>

      <ButtonMenuApp lección={"Lección 1"} id={"1"} />
      <ButtonMenuApp lección={"Lección 2"} id={"2"} />
      <ButtonMenuApp lección={"Lección 3"} id={"3"} />
      
    </div>

      
  )
}

export default MenuPalabras;