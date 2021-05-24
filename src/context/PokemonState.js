import React, {useReducer} from 'react'
import PokemonReducer from './PokemonReducer'
import PokemonContext from './PokemonContext'
import axios from 'axios';
import PokeApi from '../constants/main_constants'

const PokemonState = (props) => {
    const initialState = {
			pokemonList: [],
			pokemonSelected: null,
            showPokeDex: false
		};
    const [state, dispatch] = useReducer(PokemonReducer, initialState)
    const getPokemons = async () => {
        const res = await axios.get(PokeApi.SHOW_LIST+PokeApi.NUM_LIST);

        dispatch({
            type: 'GET_POKEMONS',
            payload: res.data.results
        })
    }
    const getPokemon = async pokemon => {
        // console.log(pokemon);
        const res = await axios.get(pokemon.url)
        
        dispatch({
            type: 'GET_POKEMON',
            payload: res.data
        })
    };

    const setShowPokeDex = (mustShow) => {
        dispatch({
            type: 'SET_POKEDEX',
            payload: mustShow
        })
    }
    return (
        <PokemonContext.Provider value={{ 
            pokemonList: state.pokemonList,
            pokemonSelected: state.pokemonSelected,
            showPokeDex: state.showPokeDex,
            getPokemon,
            getPokemons,
            setShowPokeDex
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonState
