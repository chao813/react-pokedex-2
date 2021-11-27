import React, { useState } from "react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Dropdown = () => {
  const { pokemons, capturedPokemonCards, notCapturedPokemonCards } = useContext(PokemonContext);

  console.log(
    "all", pokemons.length,
    "captured", capturedPokemonCards.length,
    "not captured", notCapturedPokemonCards.length
  );
  const [task, setTask] = useState("");
  const handleChange = () => setTask((task) => [...task, task]);
  return (
    <div className="select">
      {/* <label>Select</label> */}
      <select name="task" value={task} onChange={handleChange}>
        <option value={pokemons}>All</option>
        <option value="Captured">Captured</option>
        <option value="Not captured">Not captured</option>
      </select>
    </div>
  );
};

export default Dropdown;
