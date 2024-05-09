const { getFiles } = require("../services");

const routes = ( app ) => {
    app.get(`/files/data`, getFiles);
};

module.exports = routes;