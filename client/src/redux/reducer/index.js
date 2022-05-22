import {
    GET_NAME_POKEMON,
    GET_POKEMONS,
    ORDER_BY_NAME,
    FILTER_CREATED,
    FILTER_BY_TYPES,
    GET_TYPES,
    ORDER_BY_ATTACK

} from '../actions/types';


const initialState = {
    pokemons: [],
    filterPokemons: [],
    pokeTypes: [],
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
        case GET_TYPES:
            return {
                ...state,
                pokeTypes: action.payload
            }
        case FILTER_BY_TYPES:
            const allPokes = state.filterPokemons;
            const typeFiltered = action.payload === "all" ? allPokes :
                allPokes.filter((e) => e.types.map((e) => e.name).includes(action.payload))
            return {
                ...state,
                pokemons: typeFiltered
            }
        case ORDER_BY_ATTACK:
            const allPokemonsAttack = state.pokemons
            const orderAttack =
                action.payload === "desc"
                    ? allPokemonsAttack.sort((a, b) => (a.attack > b.attack) ? 1 : -1)
                    : allPokemonsAttack.sort((a, b) => (a.attack < b.attack) ? 1 : -1)
            return {
                ...state,
                pokemons: orderAttack
            }


        default:
            return state;
    }
}
export default rootReducer;