const { Pokemon } = require("../db")
const deletePokemon = async (req, res) => {

    const id = req.params.id
    try {


        await Pokemon.destroy({ where: { id: id } }) // se elimina el pokemon de la base de datos
        res.send('se elimino el pokemon')
    } catch (error) {
        console.log(error);
    }

};



module.exports = deletePokemon;