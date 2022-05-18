import { Link } from 'react-router-dom';
import React from 'react'
import style from './Card.module.css'

export default function Card({ name, image, types }) {
    return (
        <div className={style.mainContainer}>
            <div className={style.card}>
                <h5 className={style.linkTitle}>{name}</h5>
                <img
                    className={style.img}
                    src={image}
                    alt={name}
                    width="200px"
                    height="250px"
                />
                <h5 className={style.linkDiets}>{types}</h5>
            </div>
        </div>
    )
}