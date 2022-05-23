import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from './Detail.module.css'
import { getDetail } from '../redux/actions'
import styles from './Card.module.css'


export default function Detail(props) {
    console.log(props)
    const dispatch = useDispatch()
    const { id } = useParams()

    const detailPokemons = useSelector(state => state.detail);


    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])
    return (
        <div className={style.containerPrincipal}>
            <div>
                <div>
                    <Link to="/home" className={style.link}>
                        <button className={style.btnVolver}>Volver</button>
                    </Link>
                    {detailPokemons.length === 0 ?
                        (
                            <p>Loading...</p>
                        ) :
                        detailPokemons.length > 0 && (
                            <div>
                                <div>
                                    <h1 className={style.titleDetail}>{detailPokemons[0].name}</h1>
                                </div>
                                <img
                                    className={style.img}
                                    src={detailPokemons[0].img}
                                    alt="pokemon"
                                    width="400px"
                                    height="250px"
                                />
                                <div>

                                    <div className={style.puntuacion}>
                                        <h2 className={style.score}>
                                            <p className={style.titleText}>
                                                Hp:  {detailPokemons[0].hp}
                                            </p>
                                        </h2>
                                        <h2 >
                                            <p className={style.titleText}>
                                                Attack: {detailPokemons[0].attack}
                                            </p>
                                        </h2>
                                        <h2 >
                                            <p className={style.titleText}>
                                                Defense: {detailPokemons[0].defense}
                                            </p>
                                        </h2>
                                        <h2 >
                                            <p className={style.titleText}>
                                                speed: {detailPokemons[0].speed}
                                            </p>
                                        </h2>
                                        <h2 >
                                            <p className={style.titleText}>
                                                height: {detailPokemons[0].height}
                                            </p>
                                        </h2>
                                        <h2 >
                                            <p className={style.titleText}>
                                                weight: {detailPokemons[0].weight}
                                            </p>
                                        </h2>
                                        <h2 >
                                            <p className={style.titleText}>

                                                Types: {detailPokemons[0].types.map((e, index) => <p className={style.titleTypes} key={index}> {e.name + ", "}</p>)}
                                            </p>
                                        </h2>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

