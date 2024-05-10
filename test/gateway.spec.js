var assert = require("assert");
const { getFileList, getFileContent } = require("../src/gateway");
const { FILE_LIST_MOCK, FILE_DATA_ONLY_HEADER_MOCK } = require("./dataMock");

describe("Gateway test", () => {
  it("When getFileList function is called should success response.", async () => {
    const result = await getFileList();

    assert.equal(result.length, 9);
    assert.deepEqual(result, FILE_LIST_MOCK);
  });

  it("When getFileContent function is called should success response with data is empty", async () => {
    const result = await getFileContent("test1.csv");

    assert.equal(result.length, 20);
    assert.equal(result, FILE_DATA_ONLY_HEADER_MOCK);
  });

  it("When getFileContent function is called with 'test4.csv' should undefined response.", async () => {
    const fileName = "test4.csv";
    const result = await getFileContent(fileName);

    assert.equal(result, undefined);
  });

  it("When getFileContent function is called with 'test5.csv' should error message.", async () => {
    const fileName = "test5.csv";
    const result = await getFileContent(fileName);

    assert.equal(result, undefined);
  });
});
