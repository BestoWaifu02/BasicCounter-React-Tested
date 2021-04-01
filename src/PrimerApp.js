import React from "react";
import PropTypes from "prop-types";
//Recibiendo PROPS, y props por default
const PrimerApp = ({ saludo, subtitle }) => {
  //const saludo = "Hola Mundo";

  return (
    /* Las llaves indican que se puede enviar cosas de JS en las TAGS
    Se pueden enviar  INTS,Strings,doubles pero NO Booleans    
    */
    <>
      <h1> {saludo} !!!</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitle}</p>
    </>
  );
};
//Al mandar props aqui definimos si son requeridas
PrimerApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
//En lugar de poner los props por default en los parametros se pueden definir con el nombre del componente.defaultProps
PrimerApp.defaultProps = {
  subtitle: "soy un subtitulo",
};

export default PrimerApp;
