import React, { useState, useEffect } from 'react';
import { postPokemon, getTypes } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import style from './PokemonCreate.module.css';

function validate(input) {
    let error = {};
    if (!input.name) {
        error.name = "El nombre es obligatorio";
    }
    return error;
}




export default function PokemonCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allTypes = useSelector(state => state.pokeTypes);
    const [error, setError] = useState({});


    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        height: "",
        weight: "",
        speed: "",
        img: "",
        types: [],
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value
            })
        );
        console.log(input);
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!error.name && !error.hp && !error.attack && !error.defense && !error.height && !error.weight && !error.speed && !error.img) {
            dispatch(postPokemon(input))
            alert("Pokemon created");
            setInput({
                name: "",
                hp: "",
                attack: "",
                defense: "",
                height: "",
                weight: "",
                speed: "",
                img: "",
                types: [],
            });
        } else {
            alert("Pokemon no ha sido creado");
        }
        navigate("/home");
    }
    function handleDelete(e) {

        setInput({
            ...input,
            types: input.types.filter((el) => el !== e)

        })
    }
    return (
        <div className={style.container}>
            <div className={style.todo}>
                <Link className={style.btnVolver} to="/home">
                    <botton>VOLVER</botton>
                </Link>
                <h1 className={style.textCreate}>Create your Pokemon:</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label className={style.label}>Name:</label>
                        <input className={style.input}
                            placeholder="Ingrese Name"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.name && <p className={style.error}>{error.name}</p>}
                    </div>
                    <div>
                        <label className={style.label}>Hp:</label>
                        <input className={style.input}
                            placeholder="Ingrese Hp"
                            type="number"
                            name="hp"
                            value={input.hp}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.hp && <p className={style.error}>{error.hp}</p>}
                    </div>

                    <div>
                        <label className={style.labelAttack}>Attack:</label>
                        <input className={style.input}
                            placeholder="Ingrese Attack"
                            type="number"
                            name="attack"
                            value={input.attack}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.attack && <p className={style.error}>{error.attack}</p>}
                    </div>
                    <div>
                        <label className={style.label}>Defense:</label>
                        <input className={style.input}
                            placeholder="Ingrese Defense"
                            type="number"
                            name="defense"
                            value={input.defense}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.defense && <p className={style.error}>{error.defense}</p>}
                    </div>
                    <div>
                        <label className={style.label}>Height:</label>
                        <input className={style.input}
                            placeholder="Ingrese Height"
                            type="number"
                            name="height"
                            value={input.height}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.height && <p className={style.error}>{error.height}</p>}
                    </div>
                    <div>
                        <label className={style.label}>Weight:</label>
                        <input className={style.input}
                            placeholder="Ingrese Weight"
                            type="number"
                            name="weight"
                            value={input.weight}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.weight && <p className={style.error}>{error.weight}</p>}
                    </div>
                    <div>
                        <label className={style.label}>Speed:</label>
                        <input className={style.input}
                            placeholder="Ingrese Speed"
                            type="number"
                            name="speed"
                            value={input.speed}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.speed && <p className={style.error}>{error.speed}</p>}
                    </div>
                    <div>
                        <label className={style.label}>Image:</label>
                        <input className={style.input}
                            placeholder="Example: https://..."
                            type="text"
                            name="img"
                            value={input.img}
                            onChange={(e) => handleChange(e)}
                        />
                        {error.img && <p className={style.error}>{error.img}</p>}
                    </div>

                    <div>
                        <select onChange={e => handleSelect(e)}>
                            <option key={0} value="all">Type Filter...</option>
                            {
                                allTypes?.map(pt => {
                                    return <option value={pt.name} key={pt.id}>{pt.name}</option>
                                })
                            }

                        </select>
                        <ul >
                            <li className={style.option1} >{input.types.map((e) => e + ",  ")}</li>
                        </ul>
                    </div>
                    <button className={style.btnCreate} type="submit" >Create pokemon</button>

                </form>
                {input.types.map((e) => (
                    <div key={e}>
                        <p className={style.textDelete}>{e + " - "}</p>
                        <button onClick={() => handleDelete(e)}>X</button>
                    </div>
                ))}
            </div>
        </div>

    )
}
