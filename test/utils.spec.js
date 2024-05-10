var assert = require("assert");
const { FILE_LIST_MOCK, FILE_DATA_MOCK } = require("./dataMock");
const { formattedFileContent } = require("../src/utils");

describe("Utils test", () => {
  it("When formattedFileContent function is called should formatted data.", () => {
    const fileName = "test2";
    const result = formattedFileContent(fileName, FILE_DATA_MOCK);

    assert.equal(result.file, fileName);
    assert.deepEqual(result.lines, [
      {
        hex: "90fc61e803c620e983ca5a9474565b7a",
        number: "04466284",
        text: "ejaKJGowPdknixRPWEamElZM",
      },
    ]);
  });
});
