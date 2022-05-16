const { Type } = require('../db');
const axios = require('axios');

const getTypes = async (req, res) => {
    const result = await axios.get("https://pokeapi.co/api/v2/type");// obtenemos todos los tipos de pokemon
    try {

        const types = result.data.results.map((el) => el.name).flat();// obtenemos los nombres de los tipos

        const getTypes = [...new Set(types)];// Eliminamos los duplicados

        getTypes.forEach((type) => { // Guardamos los tipos en la base de datos
            Type.findOrCreate({ // Buscamos el tipo en la base de datos
                where: {
                    name: type // Si no existe lo creamos
                },
            })
        });
        const allTypes = await Type.findAll();// Buscamos todos los tipos en la base de datos
        res.json(allTypes);

    } catch (error) {
        console.log(error);
    }

}


module.exports = getTypes;
