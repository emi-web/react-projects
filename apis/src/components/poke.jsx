import { useState, useEffect } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState();
  const [id, setid] = useState(1);

  const handleBack = () => {
    id > 1 && setid(id - 1);
  };
  const handleNext = () => {
    setid(id + 1);
  };

  console.log(id);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  return (
    <div>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt="" />
          <br />
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>next</button>
        </div>
      )}
    </div>
  );
}
export default Pokemon;
