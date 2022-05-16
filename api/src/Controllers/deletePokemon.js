const { Pokemon } = require("../db")
const deletePokemon = async (req, res) => {

    const id = req.params.id
    try {
        await Pokemon.destroy({ where: { id: id } })
        res.send('se elimino el pokemon')
    } catch (error) {
        console.log(error);
    }

};



module.exports = deletePokemon;