import React, { useState, useEffect } from 'react';
import ButtonMenuApp from '../ButtonMenuApp/ButtonMenuPalabras';

// Este componente es el menú de las lecciones de palabras, se carga en la ruta /palabras
function MenuPalabras() {


  return (

    <div>

      <ButtonMenuApp lección={"Lección 1"} id={"1"} />
      <ButtonMenuApp lección={"Lección 2"} id={"2"} />
      <ButtonMenuApp lección={"Lección 3"} id={"3"} />
      <ButtonMenuApp lección={"Lección 4"} id={"4"} />
      <ButtonMenuApp lección={"Lección 5"} id={"5"} />
      <ButtonMenuApp lección={"Lección 6"} id={"6"} />
      <ButtonMenuApp lección={"Lección 7"} id={"7"} />
      <ButtonMenuApp lección={"Lección 8"} id={"8"} />
      <ButtonMenuApp lección={"Lección 9"} id={"9"} />
      <ButtonMenuApp lección={"Lección 10"} id={"10"} />
      <ButtonMenuApp lección={"Lección 11"} id={"11"} />

      
    </div>

      
  )
}

export default MenuPalabras;