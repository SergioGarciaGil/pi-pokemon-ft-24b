
const axios = require('axios');


const getApiInfo = async () => {

    try {
        const callingApi = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
        const apiInfo = callingApi.data.results.map((el) => {
            return axios.get(el.url)
        })

        const arrayPokes = await Promise.all(apiInfo).then((poke) => {//Promise.all espera a que todas las promesas sean resultadas
            const pokeArray = poke.map((element) => {//el es el objeto que se esta iterando
                return {

                    id: element.data.id,
                    name: element.data.name,
                    hp: element.data.stats[0].base_stat,
                    attack: element.data.stats[1].base_stat,
                    defense: element.data.stats[2].base_stat,
                    speed: element.data.stats[5].base_stat,
                    height: element.data.height,
                    weight: element.data.weight,
                    types: element.data.types.map((element) => element.type),
                    img: element.data.sprites.other.home.front_default,

                }
            });
            return pokeArray;// retorna el array de objetos
        });
        return arrayPokes;// retorna el array de pokemones
    } catch (error) {
        console.log(error);// si hay un error se imprime en consola

    }
}


module.exports = getApiInfo;