const convertToCelsius = function (farh) {
  cTemp = (farh - 32) / 1.8;
  rounded = Math.round(cTemp * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (cTemp) {
  farh = cTemp * 1.8 + 32;
  rounded = Math.round(farh * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
