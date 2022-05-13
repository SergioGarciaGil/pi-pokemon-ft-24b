const getApiInfo = require('./ApiInfo');
const getDbInfo = require('./DbInfo');

const getTotal = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const total = apiInfo.concat(dbInfo);
    return total;
}
module.exports = getTotal