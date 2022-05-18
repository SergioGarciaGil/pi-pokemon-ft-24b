import axios from 'axios';
import { GET_POKEMONS } from './types';

export function getPokemons() {
    return function (dispatch) {
        axios.get("http://localhost:3001/pokemons").then(resp => {
            return dispatch({
                type: GET_POKEMONS,
                payload: resp.data
            })
        }).catch(err => { console.log(err) })
    }
}