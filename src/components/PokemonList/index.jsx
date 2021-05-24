import React, {useContext, useEffect} from 'react'
import Pokemon from '../Pokemon'
import './pokemon-list_styles.scss'
import PokemonContext from '../../context/PokemonContext'

const PokemonList = () => {    
    const { 
        getPokemon,
        getPokemons,
        setShowPokeDex,
        showPokeDex,
        pokemonList
    } = useContext(PokemonContext);

    useEffect(() => {
        getPokemons();
    }, [])

    const handleClick = pokemon => {
        getPokemon(pokemon)
        setShowPokeDex(!showPokeDex)
    }

    return (
        <div className="pokemon-list">
            {
                pokemonList.map(pokemon => {
                    return (
                        <div onClick={() => handleClick(pokemon)} key={pokemon.name} className="poke-item">
                            <Pokemon name={pokemon.name} url={pokemon.url} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PokemonList
