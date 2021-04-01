import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en el archivo 05-funciones", () => {
  test("Debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(userTest);
  });
  test("Debe retornar un objeto con el nombre pasado como parametro", () => {
    const name = "Juan";

    const user = getUsuarioActivo(name);
    expect(user).toEqual({ uid: "ABC567", username: name });
  });
});
