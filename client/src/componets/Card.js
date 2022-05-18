import React from 'react';

import style from "./Card.module.css";

export default function Card({ img, name, types }) {
    return (

        <div className={style.mainContainer}>
            <div className={style.card}>
                <h4 className={style.linkTitle}> {name.charAt(0).toUpperCase() +
                    name.slice(1)}</h4>

                <img className={style.img} src={img} alt="PokeImage not found" width="175px" height="160px" />

                <h5>
                    {types && types.map((type, index) => (
                        <h5 key={index} value={type.name} className={style.linkTitleDiets} >{type.name}</h5>
                    ))}
                </h5>
                <br />
            </div>
        </div>
    )
}