import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Checkbox from './Checkbox';
import PokemonIcon from './PokemonIcon';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext'

const PokemonCard = () => {
    // const { url } = props
     const { captured, toggleCaptured } = useContext(PokemonContext)

    // const URL = url
    // const [pokemonCard, setPokemonCard] = useState([])

    // const fetchingPokemonCard = async () => {
    //     const res = await fetch(URL);
    //     const data = await res.json();
    //     //console.log(data)
    //     setPokemonCard(data)
    // }

    // useEffect(() => {
    //     fetchingPokemonCard()

    // }, [URL])

    return (
        <>
            <div className='pokemon-card' style={{
                height: '250px',
                maxWidth: '250px',
                margin: '1rem',
                boxShadow: '5px 5px 5px 4px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
            }} >
                <Link to={{ pathname: `/pokemon/${pokemonCard.id}` }} state={{ pokemon: pokemonCard, captured }} style={{ textDecoration: 'none', color: '#000000' }}>
                    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        {/* <PokemonIcon img={pokemonCard.sprites?.['front_default']} /> */}
                        <img style={{
                            height: '100px',
                            width: '100px',
                        }} src={pokemonCard.sprites?.['front_default']} alt='pokemon' />
                    </div>
                </Link>
                <div style={{ textAlign: 'center' }}>
                    <h1 >{pokemonCard.name}</h1>
                    <label >
                        <input
                            type='checkbox'
                            captured='false'
                            onChange={toggleCaptured}
                        />
                        <span style={{ marginLeft: 8 }}>
                            {captured === false ? 'Not captured!' : 'Captured!'}</span>

                    </label>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default PokemonCard
