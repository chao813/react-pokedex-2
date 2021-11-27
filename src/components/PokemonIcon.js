import React from 'react'

const PokemonIcon = (props) => {
    const { img } = props
    return (
        <img style={{
            height: '100px',
            width: '100px',
        }} src={img} alt='pokemon' />

    )
}

export default PokemonIcon
