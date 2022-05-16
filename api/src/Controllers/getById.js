const getTotal = require('./Service/getTotal')

const getById = async (req, res) => {
    const id = req.params.id;
    const totalPokemons = await getTotal();

    try {


        if (id) {
            let pokemonId = await totalPokemons.filter((el) => el.id == id);
            pokemonId.length !== 0
                ? res.status(200).send(pokemonId)
                : res.status(404).send(`Pokemon con Id: ${id} no existe`);

        }


    } catch (error) {
        console.log(error);

    }

}
module.exports = getById;