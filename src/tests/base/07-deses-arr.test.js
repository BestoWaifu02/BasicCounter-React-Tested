import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en desestructuracion", () => {
  test("debe retornar un string y un numero ", () => {});

  //Desesctructuracion del array
  const [letras, numeros] = retornaArreglo();
  expect(letras).toBe("ABC");
  expect(typeof letras).toBe("string");
  expect(numeros).toBe(123);
  //Indicando el tipo de datop
  expect(typeof numeros).toBe("number");
});
