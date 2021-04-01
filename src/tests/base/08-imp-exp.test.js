import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("debe de retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);

    const heroeData = heroes.find((heroe) => heroe.id == id);
    expect(heroe).toEqual(heroeData);
  });
  test("debe de retornar undefined si no existe el heroe", () => {
    const id = 99;
    const heroe = getHeroeById(id);
    console.log(heroe);

    //const heroeData = heroes.find((heroe) => heroe.id == id);
    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un  array con los heroes de DC", () => {
    const owner = "DC";
    const heroesDC = heroes.filter((heroe) => heroe.owner === owner);
    const heroesOwner = getHeroesByOwner(owner);
    expect(heroesOwner).toEqual(heroesDC);
  });

  test("debe de retornar un  array con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);
    const heroesData = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroesMarvel.length).toEqual(heroesData.length);
  });
});
