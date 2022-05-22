import {
    GET_NAME_POKEMON,
    GET_POKEMONS,
    ORDER_BY_NAME,
    FILTER_CREATED
} from '../actions/types';


const initialState = {
    pokemons: [],
    filterPokemons: [],
    types: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                filterPokemons: action.payload
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
        case FILTER_CREATED:
            const allPokemonsCreated = state.filterPokemons;
            const createdFilter =
                action.payload === "created"
                    ? allPokemonsCreated.filter((e) => e.createdInDB)
                    : allPokemonsCreated.filter((e) => !e.createdInDB);


            return {
                ...state,
                pokemons: action.payload === "all" ? allPokemonsCreated : createdFilter,

            };
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }


        default:
            return state;
    }
}
export default rootReducer;