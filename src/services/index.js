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

const formattedFileContent = (fileName, fileContent) => {
  if (!fileContent) return;

  const fileLines = fileContent.split("\n");
  const fileLinesWithoutHeader = fileLines.splice(1, fileLines.length);
  const lines = [];
  fileLinesWithoutHeader.map((line) => {
    const [file, text, num, hex] = line.split(",");

    if (file && text && num && hex) lines.push({ text, number: num, hex });
  });
  if (lines.length == 0) return;

  return {
    file: fileName,
    lines,
  };
};

const getFiles = async (req, res) => {
  //const { test } = req.query;

  const fileList = await getFileList();
  const promises = [];

  fileList.forEach((fileName) => {
    promises.push(
      getFileContent(fileName).then((fileContent) =>
        formattedFileContent(fileName, fileContent)
      )
    );
  });

  Promise.all([...promises]).then((files) => {
    // filter empty values
    const response = files.filter((data) => data);

    res.json(response ? response : []);
  });
};

module.exports = { getFiles };
