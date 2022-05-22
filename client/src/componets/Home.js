import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getPokemons,
    orderByName
} from '../redux/actions'
import { Link } from 'react-router-dom'
import Card from "../componets/Card"
import SearchBar from "../componets/SearchBar"
import style from './Home.module.css'


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
    const [, setOrder] = useState('')
    function handleOrderByName(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setOrder(`ordenado ${e.target.value}`)
    }

    return (
        <div>
            <div className={style.container}>
                <div>
                    <div className={style.navbar} >
                        <Link to="/pokemons">
                            <button className={style.allPokemons}>Crear Pokemon</button>
                        </Link>

                        <button className={style.allPokemons} onClick={(e) => handleClick(e)}> Volver a cargar los Pokemons </button>7
                        <div className={style.contentSelect}>
                            <select onClick={(e) => handleOrderByName(e)}>
                                <option value="">Ordenar de la A - Z</option>
                                <option value="asc" >Ascendente</option>
                                <option value="desc">Descendente</option>
                            </select>
                        </div>
                        <div className={style.contentSelect} >
                            <select>
                                <option value="asc">Ascendente</option>
                                <option value="desc">Descendente</option>
                            </select>
                        </div>

                        <div className={style.contentSelect}>
                            <select>
                                <option value="All">Todos </option>
                                <option value="create">Creados</option>
                                <option value="api">Existentes</option>
                            </select>
                        </div>
                        <div>
                            <SearchBar />
                        </div>

                    </div>
                    <div className={style.mainCard}>
                        {
                            allPokemons.length > 0 ? allPokemons.map(p => {
                                return <Card key={p.id} img={p.img} name={p.name} types={p.types} />


                            }) :
                                <h1>No hay pokemons</h1>

                        }
                    </div>
                </div>
            </div>
        </div>


    )
}