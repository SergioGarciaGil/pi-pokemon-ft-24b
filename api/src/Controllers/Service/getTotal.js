const getApiInfo = require('./getApiInfo');
const getDbInfo = require('./getDbInfo');

const getTotal = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const total = apiInfo.concat(dbInfo);
    return total;
}
module.exports = getTotal