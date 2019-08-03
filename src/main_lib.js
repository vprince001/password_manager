const { MAX, MIN } = require("./constants");

const getRandomASCIIValue = function() {
  return Math.floor(Math.random() * (MAX - MIN)) + MIN;
};

module.exports = { getRandomASCIIValue };
