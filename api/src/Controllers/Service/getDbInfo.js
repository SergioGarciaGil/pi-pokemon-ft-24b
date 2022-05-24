const { Pokemon, Type } = require("../../db")

// const getDbInfo = async (id) => {

//     const poke = await Pokemon.findByPk(id, {
//         include: {
//             model: Type,
//             attributes: ["name"],
//             through: {
//                 attributes: []
//             }
//         }
//     });
//     return poke;

// };
const getDbInfo = async () => {
    //trae la informacion de la base de datos
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};
module.exports = getDbInfo