import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "@testing-library/jest-dom/extend-expect";

describe("Pruebas en el componente CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  /* CICLO DE VIDA DE LAS PRUEBAS */
  //Cuando se ejecuta cada prueba se ejecuta antes el beforeEach, con esto reseteamos el wrapper con sus valores por default sin alterar
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe hacer un match con la snapshot y sus valores por defecto", () => {
    /*   const defaultValue = 100;
    const wrapper = shallow(<CounterApp value={defaultValue}></CounterApp>);
   */ expect(
      wrapper
    ).toMatchSnapshot();
  });

  test("Debe mostrar el valor de 100 usando el wrapper.find en el elemento html", () => {
    const defaultValue = 100;

    const wrapper = shallow(<CounterApp value={defaultValue}></CounterApp>);
    //.Trim() borra espacios
    const valueParrafo = wrapper.find("h2").text().trim();
    expect(valueParrafo).toBe("100");
  });

  test("Debe de incrementar con el boton de +1", () => {
    wrapper.find("button").at(0).simulate("click");

    /* console.log(btn1.html()); */
    const valueParrafo = wrapper.find("h2").text().trim();

    expect(valueParrafo).toBe("101");
  });
  test("Debe de decrementar con el boton de -1", () => {
    wrapper.find("button").at(2).simulate("click");

    /* console.log(btn1.html()); */
    const valueParrafo = wrapper.find("h2").text().trim();

    expect(valueParrafo).toBe("99");
  });

  test("boton reset debe resetear el valor por defecto  ", () => {
    const wrapper = shallow(<CounterApp value={105}></CounterApp>);
    //simulamos el evento del click para aumentar el valo y despues resetearlo
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const valueParrafo = wrapper.find("h2").text().trim();
    console.log(valueParrafo);
    expect(valueParrafo).toBe("105");
  });
});
