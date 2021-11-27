import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const Pokedex = () => {
const {pokemons} = useContext(PokemonContext)


    return (
        <>
            {pokemons.map((pokemon) => {
                // console.log(pokemon)
                return (
                    <>
                        <div style={{ width: '20%' }} key={pokemon.name}>
                            <PokemonCard
                                pokemon={pokemon}
                                name={pokemon.name}
                                
                                key={pokemon.name}
                            />

                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Pokedex
