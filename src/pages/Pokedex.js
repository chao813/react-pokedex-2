import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Pokedex = () => {
  const [captured, setCaptured] = useState([]);
  const {
    pokemons,
    setPokemons,
    capturedPokemonCards,
    setCapturedPokemonCards,
    notCapturedPokemonCards,
    setNotCapturedPokemonCards,
  } = useContext(PokemonContext);

  const fetchingPokemons = async () => {
    setCaptured(new Array(pokemons.length).fill(false));
  };

  useEffect(() => {
    fetchingPokemons();
  }, [pokemons]);

  useEffect(() => {
    console.log(captured);
    let capturedPkm = [];
    let notCapturedPkm = [];
    captured.forEach((cap, index) => {
      if (cap == true) {
        capturedPkm.push(pokemons[index]);
      } else {
        notCapturedPkm.push(pokemons[index]);
      }
    });
    setCapturedPokemonCards(capturedPkm);
    setNotCapturedPokemonCards(notCapturedPkm);
  }, [captured]);

  return (
    <>
      {pokemons.map((pokemon, index) => {
        return (
          <div style={{ width: "20%" }} key={pokemon.name}>
            <PokemonCard
              pokemon={pokemon}
              name={pokemon.name}
              index={index}
              captured={captured}
              toggleCaptured={setCaptured}
            />
          </div>
        );
      })}
    </>
  );
};

export default Pokedex;
