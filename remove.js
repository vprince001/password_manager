const fs = require("fs");
const { removeRecord, readFile } = require("./src/lib").func;
const { DATAFILEPATH } = require("./src/constants");

const main = function(site) {
  const data = readFile(fs, DATAFILEPATH);
  const updatedData = removeRecord(data, site);
  fs.writeFileSync(DATAFILEPATH, JSON.stringify(updatedData));
};

main(process.argv[2]);
