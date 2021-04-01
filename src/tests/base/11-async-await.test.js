import { getImagen } from "../../base/11-async-await";

describe("Pruebas en el archivo async await y fetch", () => {
  test("debe retornar URL de la imagen ", async () => {
    //Funcion que retorna una promesa
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
