//SNIPET racfcp ---Crea un FC con props

import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); //retorna array con 2 valores

  //handleAdd
  const handleAdd = (e) => {
    //SI fuera counter++ mutariamos los valores de una constante pero con el set counter se indica que va a cambiar el valor
    setCounter(counter + 1);
    /* setCounter(c)=>c+1 */
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      {/* se manda el puntero de la APP osea sin () porque sino React la ejecutaria */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={() => setCounter(value)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
