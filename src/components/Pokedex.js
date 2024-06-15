import "../assets/pokedex.css";
import Pokemon from './Pokemon';
import pokemonData from "../pokemon.json"

function Pokedex() {
  return (
    <>
      <div className="pokedex">
        <h1 className="title">Pokedex</h1>
        <h2>Select a pokemon to learn more!</h2>
        <div className="container">
            {pokemonData.pokemon.map((p) => (
            <Pokemon
                key={p.id}
                id={p.id}
                name={p.name}
            />
            ))}
        </div>
      </div>
    </>
  );
}

export default Pokedex;
