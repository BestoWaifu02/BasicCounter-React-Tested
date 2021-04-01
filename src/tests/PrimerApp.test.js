//import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import PrimerApp from "../PrimerApp";

describe("Pruebas en el componente PrimerApp", () => {
  /* PRUEBA CON JEST */

  /*   test('Debe mostrar el mensaje "Hola soy Diego" ', () => {
    const saludo = "Hola soy Diego";
    //Render es una funcion que recibe un componente a renderizar
    //Mandamos las props del componente porque las definimos que requisito
    //Desestructuramos el getByText del render
    const { getByText } = render(<PrimerApp saludo="Hola soy Diego" />);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */

  /* PRUEBA CON ENZYME */
  test("Debe mostrar primerApp correctamente", () => {
    const saludo = "Hola soy Diego";
    const wrapper = shallow(<PrimerApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por PROPS", () => {
    const subtitle = "soy un subtitulo";
    const saludo = "Hola soy Diego";
    const wrapper = shallow(<PrimerApp saludo={saludo} subtitle={subtitle} />);
    //Aqui es como un doc.querySelector ya que busca en el wrapper
    const textoParrafo = wrapper.find("p").text();
    console.log(textoParrafo);
    expect(textoParrafo).toBe(subtitle);
  });
});
