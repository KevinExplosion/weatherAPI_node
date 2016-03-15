var apiKey = require('./../.env').apiKey;
var city;


$(document).ready(function() {
  $('#weatherHumidity').click(function() {
    city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showhumid').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('#location').val(city);
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
