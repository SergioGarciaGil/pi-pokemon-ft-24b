const { Pokemon, Type } = require("../db");

const createPokemon = async (req, res) => {

    const {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
        img
    } = req.body;
    const newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
    });

    const typeDb = await Type.findAll({// dentro de la base de datos busca todos los tipos
        where: { name: types }
    })
    newPokemon.addTypes(typeDb);// agrega la dieta a la base de datos
    res.send("Pokemon creado");
}


module.exports = createPokemon;