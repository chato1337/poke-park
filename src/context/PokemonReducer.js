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
        default:
            return state;
    }
}