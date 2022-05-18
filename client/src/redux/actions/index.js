import axios from 'axios';
import { GET_POKEMONS } from './types';

export function getPokemons() {
    return async (dispatch) => {
        let pokemons = await axios.get("http://localhost:3001/pokemons")
        return dispatch({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
    }
}