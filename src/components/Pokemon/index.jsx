import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {BiLoader} from 'react-icons/bi'

const Pokemon = ({name, url}) => {
    const [pokemonState, setPokemonState] = useState({
			sprites: {
				front_default:
					"https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif",
			},
		});
        
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPokemonState(response.data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
			<div>
                    <img src={pokemonState.sprites.front_default} alt={name} />
			</div>
		);
}

export default Pokemon
