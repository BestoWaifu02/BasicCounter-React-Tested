import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  //Mandamos done porque sino el codigo lo ejecutaria de forma corrida
  test("Debe retornar un hero ASYNC", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  //Cuando se trabajen tareas asincronas se manda el callback DONE
  test("Debe obtener un error si se manda un ID que no exoste", (done) => {
    const id = 99;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
