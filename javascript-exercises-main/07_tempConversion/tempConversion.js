const convertToCelsius = function(f) {
  let FtoC=(f-32)*(5/9);
  FtoCRounded=Math.round(FtoC*10)/10;
  return FtoCRounded;
  
};

const convertToFahrenheit = function(c) {
  let CtoF=c*(9/5)+32;
  CtoFRounded=Math.round(CtoF*10)/10;
  return CtoFRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
