const { Pokemon, Type } = require("../../db")

const getDbInfo = async () => {
    return await Pokemon.findAll({
        // trae la informacion de la base de datos
        include: ["name"],
        model: Type,
        through: {
            attributes: [],
        }
    })
}

module.exports = getDbInfo