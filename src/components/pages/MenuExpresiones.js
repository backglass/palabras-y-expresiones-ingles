import React, { useState, useEffect } from 'react';
import ButtonMenuExpresiones from '../ButtonMenuApp/ButtonMenuExpresiones';

// Este componente es el menú de las lecciones de expresines, se carga en la ruta /expresiones
// y cada boton carga una lección id = 1, 2, 3 etc

function MenuPalabras() {


  return (

    <div>

      <ButtonMenuExpresiones expresion={"Expresión 1"} id={"1"} />
      <ButtonMenuExpresiones expresion={"Expresión 2"} id={"2"} />
      <ButtonMenuExpresiones expresion={"Expresion 3"} id={"3"} />
      
    </div>

      
  )
}

export default MenuPalabras;