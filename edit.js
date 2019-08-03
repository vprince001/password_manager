const fs = require("fs");
const { getEditedData, readFile } = require("./src/lib").func;
const { DATAFILEPATH } = require("./src/constants");
const { getRandomASCIIValue } = require("./src/main_lib");

const main = function(values) {
  const data = readFile(fs, DATAFILEPATH);
  const editedData = getEditedData(data, values, getRandomASCIIValue);
  fs.writeFileSync(DATAFILEPATH, JSON.stringify(editedData));
};

main([process.argv[2], process.argv[3], process.argv[4]]);
