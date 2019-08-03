const fs = require("fs");
const { getRecord, readFile } = require("./src/lib").func;
const { DATAFILEPATH } = require("./src/constants");
const { getRandomASCIIValue } = require("./src/main_lib");

const main = function(values) {
  const data = readFile(fs, DATAFILEPATH);
  data.push(getRecord(values, getRandomASCIIValue));
  fs.writeFileSync(DATAFILEPATH, JSON.stringify(data));
};

main([process.argv[2], process.argv[3], process.argv[4]]);
