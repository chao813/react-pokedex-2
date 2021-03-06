import React from 'react'
import { useLocation } from 'react-router';
import PokemonIcon from '../components/PokemonIcon';


const Pokemon = () => {
    const location = useLocation()
    const { pokemon, captured } = location.state;
    
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <PokemonIcon img={pokemon.sprites?.['front_default']} />
            <h2>{captured === true ? 'captured' : 'not captured'}</h2>
        </div>
    )
}

export default Pokemon
