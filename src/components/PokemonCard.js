import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Checkbox from './Checkbox';
import PokemonIcon from "./PokemonIcon";

const PokemonCard = ({ pokemon, name, index, captured, toggleCaptured }) => {
  function clickedCapture() {
    let items = [...captured];
    items[index] = !items[index];
    toggleCaptured(items);
  }

  var currentPokemonCaptured = captured[index];

  return (
    <>
      <div
        className="pokemon-card"
        style={{
          height: "250px",
          maxWidth: "250px",
          margin: "1rem",
          boxShadow: "5px 5px 5px 4px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
        }}
      >
        <Link
          to={{ pathname: `/pokemon/${pokemon.id}` }}
          style={{ textDecoration: "none", color: "#000000" }}
          state={{ pokemon: pokemon, currentPokemonCaptured }}
        >
          <div
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <PokemonIcon img={pokemonCard.sprites?.['front_default']} /> */}
            <img
              style={{
                height: "100px",
                width: "100px",
              }}
              src={pokemon.sprites?.["front_default"]}
              alt="pokemon"
            />
          </div>
        </Link>
        <div style={{ textAlign: "center" }}>
          <h1>{pokemon.name}</h1>
          <label>
            <input type="checkbox" onChange={clickedCapture} />
            <span style={{ marginLeft: 8 }}>
              {captured[index] === false ? "Not captured!" : "Captured!"}
            </span>
          </label>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default PokemonCard;
