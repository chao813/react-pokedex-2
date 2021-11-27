import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [captured, setCaptured] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=5";
  const [capturedPokemonCards, setCapturedPokemonCards] = useState();
  const [notCapturedPokemonCards, setNotCapturedPokemonCards] = useState();
  const pokCardURL = pokemons.map((pokemon) => pokemon.url);

  const fetchingPokemons = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setPokemons(data.results);
    //setCaptured([false, false, false, false, false]);
    setCaptured(new Array(data.results.length).fill(false));
  };

  useEffect(() => {
    fetchingPokemons();
  }, [URL]);

  useEffect(() => {
    console.log(captured);
    let capturedPkm = [];
    let notCapturedPkm = [];
    captured.forEach((cap, index) => {
        if(cap == true){
            capturedPkm.push(pokemons[index]);
        }
        else {
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
