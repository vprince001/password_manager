const fs = require("fs");
const { getDecodedValues, readFile } = require("./src/lib").func;
const { DATAFILEPATH } = require("./src/constants");

const main = function(site) {
  const data = readFile(fs, DATAFILEPATH);
  const values = getDecodedValues(data, site);
  console.log("Website -", values[0]);
  console.log("Username -", values[1]);
  console.log("Password -", values[2]);
};

main(process.argv[2]);
