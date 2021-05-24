import React, {useReducer} from 'react'
import PokemonReducer from './PokemonReducer'
import PokemonContext from './PokemonContext'
import axios from 'axios';

const PokemonState = (props) => {
    const initialState = {
			pokemonList: [],
			pokemonSelected: null,
		};
    const [state, dispatch] = useReducer(PokemonReducer, initialState)
    const getPokemons = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
        // let pokeData = []
        // res.data.results.forEach(async poke => {
        //     const pokeObj = await axios.get(poke.url)
        //     pokeData.push(pokeObj.data)
        // });

        dispatch({
            type: 'GET_POKEMONS',
            payload: res.data.results
        })
    }
    const getPokemon = async pokemon => {
        console.log(pokemon);
        const res = await axios.get(pokemon.url)
        
        dispatch({
            type: 'GET_POKEMON',
            payload: res.data
        })
    };
    return (
        <PokemonContext.Provider value={{ 
            pokemonList: state.pokemonList,
            pokemonSelected: state.pokemonSelected,
            getPokemon,
            getPokemons
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonState
