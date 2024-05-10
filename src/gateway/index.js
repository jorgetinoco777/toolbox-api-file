const axios = require("axios");

const getFileList = () => {
    // Get files list
    return axios
      .get("https://echo-serv.tbxnet.com/v1/secret/files", {
        headers: {
          Authorization: "Bearer aSuperSecretKey",
        },
      })
      .then((response) => {
        if (!response.data) return [];
  
        return response.data.files ? response.data.files : [];
      })
      .catch(() => {
        console.log(`Error: No se pudo leer la lista archivos.`);
      });
  };
  
  const getFileContent = (fileName) => {
    return axios
      .get(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`, {
        headers: {
          Authorization: "Bearer aSuperSecretKey",
        },
      })
      .then((response) => {
        if (!response || !response.data) return;
  
        return response.data;
      })
      .catch(() => {
        console.log("Error al obtener la información del archivo: ", fileName);
      });
  };

  module.exports = { getFileContent, getFileList };