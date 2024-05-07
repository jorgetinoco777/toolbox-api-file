const { VERSION } = require("../environments");
const { getFileByName } = require("../services");

const routes = ( app ) => {
    app.get(`/api/${ VERSION }/file`, getFileByName);
};

module.exports = routes;