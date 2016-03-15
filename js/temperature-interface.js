var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').Temperature;

$(document).ready(function() {
  $('#weatherTemp').click(function() {
    var city = $('#location').val();
    // var kelvinTemp = response.main.temp; //sets a new variable equal to the temp returned by the API
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      debugger;
      var kelvinTemp = response.main.temp; //sets a new variable equal to the temp returned by the API
      var newTemperature = new Temperature(kelvinTemp);
      console.log(newTemperature.convertToF());
      $('.showtemp').text("The temperature in " + city + " is " + newTemperature.convertToF());

    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
