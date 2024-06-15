import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/pokemon-card.css";

function PokemonCard() {
  // Use the useParams hook to get the pokemonID from the URL
  let { pokemonID } = useParams();
  
  // Get Pokemon Data from 3rd Party API
  const [pokemon, setPokemon] = useState("");
  let URL = `https://pisaucer.github.io/staticmon/pokemon/${pokemonID}`;
  useEffect(() => {
    fetch( URL )
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Handler to nagivate the user back to the Pokedex page
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/pokedex");
  }

  return (
    <div className="pokemon-container">
      <div className="pokemon-card">
        <h1>{pokemon.name}</h1>
        <img src={`https://pisaucer.github.io/staticmon/images/${pokemon.number}.png`} />
        <div>{pokemon.description}</div> <br />
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
        <div>Pokedex Number: {pokemon.number}</div>
      </div>
      <button onClick={handleClick}>Back to the Pokedex</button>
    </div>
  );
}

export default PokemonCard;