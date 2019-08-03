const { cloneDeep } = require("lodash");
const { ES, MIN, FORMAT } = require("./constants");

const readFile = function(fs, filePath) {
  let data = ES;
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath, FORMAT));
  }
  return data;
};

//--------------------ADD--------------------//
const getRandomASCIIValues = function(numOfChar, getRandomASCIIValue) {
  let count = 1;
  let randomASCIIValues = ES;

  while (count <= numOfChar) {
    let code = getRandomASCIIValue();
    randomASCIIValues += code;
    count++;
  }
  return randomASCIIValues;
};

const encode = function(value, getRandomASCIIValue) {
  let valueInASCII = ES;
  index = 0;
  while (index < value.length) {
    valueInASCII += getRandomASCIIValues(index + 1, getRandomASCIIValue);
    valueInASCII += value.charCodeAt(index);
    index++;
  }
  return valueInASCII;
};

const getEncodedValues = function(values, getRandomASCIIValue) {
  const encodedValuesInASCII = [];
  values.forEach(value => {
    encodedValuesInASCII.push(encode(value, getRandomASCIIValue));
  });
  return encodedValuesInASCII;
};

const getRecord = function(values, getRandomASCIIValue) {
  const encodedValues = getEncodedValues(values, getRandomASCIIValue);
  return {
    site: encodedValues[0],
    username: encodedValues[1],
    password: encodedValues[2]
  };
};

//--------------------GET--------------------//
const removeRandomChars = function(encodedValue) {
  const splittedEncodedValue = encodedValue.split(ES);
  let decodedValue = ES;
  let indexOfValue = 2;
  for (
    let index = 1;
    index < encodedValue.length;
    index = index + indexOfValue
  ) {
    decodedValue += splittedEncodedValue[index];
    indexOfValue++;
  }
  return decodedValue;
};

const convertASCIIToChar = function(encodedValueInNumber) {
  let valueEncodedInChar = ES;
  for (let index = 0; index < encodedValueInNumber.length; index += 2) {
    let code = encodedValueInNumber.substring(index, index + 2);
    if (parseInt(code) < MIN) {
      code += encodedValueInNumber.charAt(index + 2);
      index++;
    }
    valueEncodedInChar += String.fromCharCode(code);
  }
  return valueEncodedInChar;
};

const getDecodedValues = function(data, site) {
  const values = [];
  data.forEach(record => {
    const decodedSite = removeRandomChars(convertASCIIToChar(record.site));
    if (decodedSite == site) {
      values.push(decodedSite);
      values.push(removeRandomChars(convertASCIIToChar(record.username)));
      values.push(removeRandomChars(convertASCIIToChar(record.password)));
    }
  });
  return values;
};

//--------------------EDIT--------------------//
const updateRecord = function(record, values, getRandomASCIIValue) {
  const editedRecord = cloneDeep(record);
  if (removeRandomChars(convertASCIIToChar(editedRecord.site)) == values[0]) {
    editedRecord.username = encode(values[1], getRandomASCIIValue);
    editedRecord.password = encode(values[2], getRandomASCIIValue);
  }
  return editedRecord;
};

const getEditedData = function(data, values, getRandomASCIIValue) {
  const editedData = cloneDeep(data);
  editedData.forEach((record, index) => {
    editedData[index] = updateRecord(record, values, getRandomASCIIValue);
  });
  return editedData;
};

//--------------------REMOVE--------------------//
const removeRecord = function(data, site) {
  const updatedData = data.filter(record => {
    return removeRandomChars(convertASCIIToChar(record.site)) != site;
  });
  return updatedData;
};

const func = {
  getRandomASCIIValues,
  encode,
  getEncodedValues,
  getRecord,
  removeRandomChars,
  getDecodedValues,
  getEditedData,
  removeRecord,
  convertASCIIToChar,
  updateRecord,
  readFile
};

module.exports = { func };
