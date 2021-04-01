import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("prueba en el metodo getSaludo debe retornar saludo con nombre ", () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);
    //Indicamos el expect que deberia imprimir
    expect(saludo).toBe("Hola " + nombre + "!");
  });

  test("prueba en el metodo getSaludo debe retornar saludo sin pasar nombre ", () => {
    const saludo = getSaludo();
    //Indicamos el expect que deberia imprimir
    expect(saludo).toBe("Hola Carlos!");
  });
});
