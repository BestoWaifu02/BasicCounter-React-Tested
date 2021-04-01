describe("Pruebas en el archivo demo.test.js", () => {
  test("deben ser iguales los strings", () => {
    //1 Inicializacion
    const mensaje = "Hola Mundo";
    //2 Estimulo
    const mensaje2 = "Hola Mundo";
    //3 Observar el comportamiento
    //.toBe espera que el contenido sea IGUAL
    expect(mensaje).toBe(mensaje2);
  });
});
