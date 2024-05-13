const { getFileList, getFileContent } = require("../gateway");
const { formattedFileContent } = require("../utils");

const getFilesByName = async (req, res) => {
  const { fileName } = req.query;

  let existsFile = "";
  let fileList = await getFileList();

  if (fileName) existsFile = fileList.find((file) => file === fileName);

  if (existsFile && existsFile.length > 0 && fileName) fileList = [existsFile];

  if (!existsFile && fileName) {
    res.json([]);
    return;
  }

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

const getFiles = async (_, res) => {
  let fileList = await getFileList();

  res.json(fileList ? fileList : []);
};

module.exports = { getFiles, getFilesByName };
