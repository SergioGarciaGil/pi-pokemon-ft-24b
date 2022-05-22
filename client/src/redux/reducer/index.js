import { GET_NAME_POKEMON, GET_POKEMONS, ORDER_BY_NAME } from '../actions/types';


const initialState = {
    pokemons: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_NAME_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }
        case ORDER_BY_NAME:
            const allPokemons = state.pokemons
            const order =
                action.payload === "asc"
                    ? allPokemons.sort((a, b) => (a.name > b.name) ? 1 : -1)
                    : allPokemons.sort((a, b) => (a.name < b.name) ? 1 : -1)
            return {
                ...state,
                pokemons: order
            }

        default:
            return state;
    }
}
export default rootReducer;