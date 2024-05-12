const axios = require("axios");
const { EXTERNAL_API, SECRET_KEY } = require("../environment/environment");

const getFileList = () => {
  // Get files list
  return axios
    .get(`${EXTERNAL_API}/v1/secret/files`, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
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
    .get(`${EXTERNAL_API}/v1/secret/file/${fileName}`, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
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
