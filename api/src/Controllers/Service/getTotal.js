const getApiInfo = require('./getApiInfo');
const getDbInfo = require('./getDbInfo');

const getTotal = async () => {
    try {
        const apiInfo = await getApiInfo();
        const dbInfo = await getDbInfo();

        return [...apiInfo, ...dbInfo];
    } catch (error) {
        console.log(error);

    }
}
module.exports = getTotal