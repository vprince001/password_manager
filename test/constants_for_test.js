const TDS = {
  ES: "",
  FILE_PATH: "filePath",
  WRONG_FILE_PATH: "file",
  ONE_CHAR_ENCODED_IN_CHAR: "lh",
  ONE_CHAR: "h",
  FIVE_CHARS_ENCODED_IN_CHAR: "th!3euL8lpR@.lp0T~Mo",
  FIVE_CHARS: "hello",
  FIVE_CHARS_ENCODED_IN_CHAR_CONTAING_WS: "th! eu 8lp @.lp0 ~Mo",
  ASCII_ENCODED_site: "70115707010570707011670707070101",
  ASCII_ENCODED_usr: "701177070115707070114",
  ASCII_ENCODED_pwd: "701127070119707070100",
  ASCII_ENCODED_user: "70117707011570707010170707070114",
  ASCII_ENCODED_pswd: "70112707011570707011970707070100",
  FIVE_CHARS_ENCODED_IN_ASCII: "701047070101707070108707070701087070707070111"
};

const TDA = {
  VALUES: ["site", "usr", "pwd"],
  EDITED_VALUES_WITH_MATCHING_SITE: ["site", "user", "pswd"],
  EDITED_VALUES_WITH_UNMATCHING_SITE: ["website", "user", "pswd"],
  DATA: [
    {
      site: TDS.ASCII_ENCODED_site,
      username: TDS.ASCII_ENCODED_usr,
      password: TDS.ASCII_ENCODED_pwd
    }
  ],
  ENCODED_VALUES_IN_ASCII: [
    TDS.ASCII_ENCODED_site,
    TDS.ASCII_ENCODED_usr,
    TDS.ASCII_ENCODED_pwd
  ],
  EDITED_DATA: [
    {
      site: TDS.ASCII_ENCODED_site,
      username: TDS.ASCII_ENCODED_user,
      password: TDS.ASCII_ENCODED_pswd
    }
  ]
};

const TDF = {
  mockRandomASCIIValue: () => {
    return 70;
  },

  readFileSync: (filePath, format) => {
    return JSON.stringify(TDA.DATA);
  },

  existsSync: filePath => {
    if (filePath == "filePath") {
      return true;
    }
    return false;
  }
};

const TDO = {
  RECORD_ENCODED_IN_ASCII: {
    site: TDS.ASCII_ENCODED_site,
    username: TDS.ASCII_ENCODED_usr,
    password: TDS.ASCII_ENCODED_pwd
  },
  EDITED_RECORD_ENCODED_IN_ASCII: TDA.EDITED_DATA[0],
  mockFS: {
    readFileSync: TDF.readFileSync,
    existsSync: TDF.existsSync
  }
};

// const ES = "";
// const FILE_PATH = "filePath";
// const WRONG_FILE_PATH = "file";
// const ONE_CHAR_ENCODED_IN_CHAR = "lh";
// const ONE_CHAR = "h";
// const FIVE_CHARS_ENCODED_IN_CHAR = "th!3euL8lpR@.lp0T~Mo";
// const FIVE_CHARS = "hello";
// const FIVE_CHARS_ENCODED_IN_CHAR_CONTAING_WS = "th! eu 8lp @.lp0 ~Mo";
// const ASCII_ENCODED_site = "70115707010570707011670707070101";
// const ASCII_ENCODED_usr = "701177070115707070114";
// const ASCII_ENCODED_pwd = "701127070119707070100";
// const ASCII_ENCODED_user = "70117707011570707010170707070114";
// const ASCII_ENCODED_pswd = "70112707011570707011970707070100";
// const VALUES = ["site", "usr", "pwd"];
// const EDITED_VALUES_WITH_MATCHING_SITE = ["site", "user", "pswd"];
// const EDITED_VALUES_WITH_UNMATCHING_SITE = ["website", "user", "pswd"];
// const FIVE_CHARS_ENCODED_IN_ASCII =
//   "701047070101707070108707070701087070707070111";

// const DATA = [
//   {
//     site: ASCII_ENCODED_site,
//     username: ASCII_ENCODED_usr,
//     password: ASCII_ENCODED_pwd
//   }
// ];

// const RECORD_ENCODED_IN_ASCII = {
//   site: ASCII_ENCODED_site,
//   username: ASCII_ENCODED_usr,
//   password: ASCII_ENCODED_pwd
// };

// const ENCODED_VALUES_IN_ASCII = [
//   ASCII_ENCODED_site,
//   ASCII_ENCODED_usr,
//   ASCII_ENCODED_pwd
// ];

// const EDITED_DATA = [
//   {
//     site: ASCII_ENCODED_site,
//     username: ASCII_ENCODED_user,
//     password: ASCII_ENCODED_pswd
//   }
// ];

// const EDITED_RECORD_ENCODED_IN_ASCII = EDITED_DATA[0];

// const mockRandomASCIIValue = function() {
//   return 70;
// };

// const readFileSync = function(filePath, format) {
//   return JSON.stringify(DATA);
// };

// const existsSync = function(filePath) {
//   if (filePath == "filePath") {
//     return true;
//   }
//   return false;
// };

// const mockFS = {
//   readFileSync: readFileSync,
//   existsSync: existsSync
// };

// module.exports = {
//   ES,
//   FILE_PATH,
//   WRONG_FILE_PATH,
//   DATA,
//   mockRandomASCIIValue,
//   ONE_CHAR_ENCODED_IN_CHAR,
//   ONE_CHAR,
//   FIVE_CHARS_ENCODED_IN_CHAR,
//   FIVE_CHARS_ENCODED_IN_ASCII,
//   FIVE_CHARS,
//   FIVE_CHARS_ENCODED_IN_CHAR_CONTAING_WS,
//   VALUES,
//   EDITED_VALUES_WITH_MATCHING_SITE,
//   EDITED_VALUES_WITH_UNMATCHING_SITE,
//   ENCODED_VALUES_IN_ASCII,
//   RECORD_ENCODED_IN_ASCII,
//   EDITED_RECORD_ENCODED_IN_ASCII,
//   EDITED_DATA,
//   mockFS
// };

module.exports = { TDS, TDA, TDO, TDF };
