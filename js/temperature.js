exports.Temperature = function(kelvinTemp) {
  this.kelvinTemp = kelvinTemp;
}

exports.Temperature.prototype.convertToF = function() {
  var tempInF = parseInt((this.kelvinTemp * 9/5) - 459.67);
  return tempInF;
}
