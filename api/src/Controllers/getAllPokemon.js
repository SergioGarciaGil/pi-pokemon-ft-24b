const getTotal = require('./Service/getTotal')


const getAllPokemon = async (req, res) => {
    const name = req.query.name;
    const totalPokemons = await getTotal();

    try {
        if (name) {
            let pokemonName = await totalPokemons.filter((pokemon) =>
                pokemon.name.toLowerCase()
                    .split('')
                    .join('')
                    .includes(name.toLowerCase().split(" ").join("")));

            pokemonName.length !== 0
                ? res.status(200).send(pokemonName)
                : res.status(404).send({ message: "Pokemon no existe" });

        } else {
            res.status(200).send(totalPokemons);
        }
    } catch (error) {
        res.send({ message: "Error" });

    }

}

module.exports = getAllPokemon;