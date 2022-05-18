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
const getDbInfo = async (id) => {
    //trae la informacion de la base de datos
    return await Pokemon.findAll(id, {
        include: {
            model: Type,
            atributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};
module.exports = getDbInfo