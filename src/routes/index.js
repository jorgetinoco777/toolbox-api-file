const { getFiles, getFilesByName } = require("../services");

const routes = ( app ) => {
    app.get(`/files/data`, getFilesByName);
    app.get(`/files/list`, getFiles);
};

module.exports = routes;