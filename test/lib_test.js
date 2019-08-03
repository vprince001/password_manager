const { equal, deepEqual } = require("assert");
const { func } = require("../src/lib");
const { TDS, TDA, TDO, TDF } = require("./constants_for_test");

describe("removeRandomChars", function() {
  it("should remove random characters from value for 1 character value", function() {
    const actual = func.removeRandomChars(TDS.ONE_CHAR_ENCODED_IN_CHAR);
    const expected = TDS.ONE_CHAR;
    equal(actual, expected);
  });

  it("should remove random characters from value for more than 1 character value", function() {
    const actual = func.removeRandomChars(TDS.FIVE_CHARS_ENCODED_IN_CHAR);
    const expected = TDS.FIVE_CHARS;
    equal(actual, expected);
  });

  it("should remove random characters from value for more than 1 character value and spaces", function() {
    const actual = func.removeRandomChars(
      TDS.FIVE_CHARS_ENCODED_IN_CHAR_CONTAING_WS
    );
    const expected = TDS.FIVE_CHARS;
    equal(actual, expected);
  });
});

describe("convertASCIIToChar", function() {
  it("should convert all ASCII values to chars for all two digit values", function() {
    const actual = func.convertASCIIToChar("65707580");
    const expected = "AFKP";
    equal(actual, expected);
  });

  it("should convert all ASCII values to chars for all three digit values", function() {
    const actual = func.convertASCIIToChar("100102104109");
    const expected = "dfhm";
    equal(actual, expected);
  });

  it("should convert all ASCII values to chars for both two digit and three digit values", function() {
    const actual = func.convertASCIIToChar("66126104845537108");
    const expected = "B~hT7%l";
    equal(actual, expected);
  });
});

describe("getDecodedValues", function() {
  it("should return all three values after decoding if given site is present in data", function() {
    const actual = func.getDecodedValues(TDA.DATA, "site");
    const expected = TDA.VALUES;
    deepEqual(actual, expected);
  });

  it("should return empty array when given site is not present in data", function() {
    const actual = func.getDecodedValues(TDA.DATA, "website");
    const expected = [];
    deepEqual(actual, expected);
  });
});

describe("removeRecord", function() {
  it("should return updated data after removing a record when given site is present", function() {
    const actual = func.removeRecord(TDA.DATA, "site");
    const expected = [];
    deepEqual(actual, expected);
  });

  it("should return given data when given site is not present", function() {
    const actual = func.removeRecord(TDA.DATA, "website");
    const expected = TDA.DATA;
    deepEqual(actual, expected);
  });
});

describe("getRandomASCIIValues", function() {
  it("should return given number of random ASCII values", function() {
    const actual = func.getRandomASCIIValues(2, TDF.mockRandomASCIIValue);
    const expected = "7070";
    equal(actual, expected);
  });

  it("should return empty string when given number is less than or equal to zero", function() {
    const actual = func.getRandomASCIIValues(0, TDF.mockRandomASCIIValue);
    const expected = TDS.ES;
    equal(actual, expected);
  });
});

describe("encode", function() {
  it("should return a string of ASCII code of every character of given value with some added random ASCII values", function() {
    const actual = func.encode(TDS.FIVE_CHARS, TDF.mockRandomASCIIValue);
    const expected = TDS.FIVE_CHARS_ENCODED_IN_ASCII;
    equal(actual, expected);
  });
});

describe("getEncodedValues", function() {
  it("should return an array of encoded values in ASCII code", function() {
    const actual = func.getEncodedValues(TDA.VALUES, TDF.mockRandomASCIIValue);
    const expected = TDA.ENCODED_VALUES_IN_ASCII;
    deepEqual(actual, expected);
  });
});

describe("getRecord", function() {
  it("should return a record containing site, username, and password encoded in ASCII", function() {
    const actual = func.getRecord(TDA.VALUES, TDF.mockRandomASCIIValue);
    const expected = TDO.RECORD_ENCODED_IN_ASCII;
    deepEqual(actual, expected);
  });
});

describe("updateRecord", function() {
  it("should return updated record after encoding given data when given site is present", function() {
    const actual = func.updateRecord(
      TDO.RECORD_ENCODED_IN_ASCII,
      TDA.EDITED_VALUES_WITH_MATCHING_SITE,
      TDF.mockRandomASCIIValue
    );
    const expected = TDO.EDITED_RECORD_ENCODED_IN_ASCII;
    deepEqual(actual, expected);
  });

  it("should return given record when given site is not present", function() {
    const actual = func.updateRecord(
      TDO.RECORD_ENCODED_IN_ASCII,
      TDA.EDITED_VALUES_WITH_UNMATCHING_SITE,
      TDF.mockRandomASCIIValue
    );
    const expected = TDO.RECORD_ENCODED_IN_ASCII;
    deepEqual(actual, expected);
  });
});

describe("getEditedData", function() {
  it("should return updated data when given site is present in any record", function() {
    const actual = func.getEditedData(
      TDA.DATA,
      TDA.EDITED_VALUES_WITH_MATCHING_SITE,
      TDF.mockRandomASCIIValue
    );
    const expected = TDA.EDITED_DATA;
    deepEqual(actual, expected);
  });

  it("should return given data when given site is not present in any record", function() {
    const actual = func.getEditedData(
      TDA.DATA,
      TDA.EDITED_VALUES_WITH_UNMATCHING_SITE,
      TDF.mockRandomASCIIValue
    );
    const expected = TDA.DATA;
    deepEqual(actual, expected);
  });
});

describe("readFile", function() {
  it("should return json data when file is present", function() {
    const actual = func.readFile(TDO.mockFS, TDS.FILE_PATH);
    const expected = TDA.DATA;
    deepEqual(actual, expected);
  });

  it("should return empty string when file is not present", function() {
    const actual = func.readFile(TDO.mockFS, TDS.WRONG_FILE_PATH);
    const expected = TDS.ES;
    deepEqual(actual, expected);
  });
});
