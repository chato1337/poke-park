export default function (state, action) {
    const {payload, type} = action

    switch(type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemonList: payload
            }
        case 'GET_POKEMON':
            return {
                ...state,
                pokemonSelected: payload
            }
        case 'SET_POKEDEX':
            return {
                ...state,
                showPokeDex: payload
            }
        default:
            return state;
    }
}