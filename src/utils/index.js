const formattedFileContent = (fileName, fileContent) => {
  if (!fileContent) return;

  const fileLines = fileContent.split("\n");
  const fileLinesWithoutHeader = fileLines.splice(1, fileLines.length);
  const lines = [];
  fileLinesWithoutHeader.map((line) => {
    const [file, text, num, hex] = line.split(",");

    if (file && text && num && Number(num) && hex)
      lines.push({ text, number: num, hex });
  });
  if (lines.length == 0) return;

  return {
    file: fileName,
    lines,
  };
};

module.exports = { formattedFileContent };
