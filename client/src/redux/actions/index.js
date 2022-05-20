import axios from 'axios';
import { GET_POKEMONS, GET_NAME_POKEMON } from './types';

export function getPokemons() {
    return async (dispatch) => {
        let pokemons = await axios.get("http://localhost:3001/pokemons")
        return dispatch({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
    }
}

export function getNamePokemon(name) {
    return async (dispatch) => {
        let pokemon = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        return dispatch({
            type: GET_NAME_POKEMON,
            payload: pokemon.data
        })
    }
}