import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../redux/actions'
import { Link } from 'react-router-dom'
import Card from "../componets/Card"

export default function Home() {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getPokemons())
    }

    return (
        <div>
            <Link to="/pokemons"> Crear personaje</Link>
            <h1>Pagina Pokemons</h1>
            <button onClick={(e) => handleClick(e)}> Volver a cargar los Pokemons </button>
            <div>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>
            <div>
                <select>
                    <option value="All">Todos </option>
                    <option value="create">Creados</option>
                    <option value="api">Existentes</option>
                </select>
            </div>
            {allPokemons && allPokemons.map((el) => {
                <Card key={el.id} name={el.name} image={el.image} types={el.types} />
            })}
        </div>


    )
}