$(document).ready(function () {

  var city = "London";

  // document.write(thermostat.updateTemp());
  document.getElementById('tempupdate').innerHTML = thermostat.updateTemp();

  $("#raise").click(function () {
    thermostat.raiseTemperature();
    document.getElementById('tempupdate').innerHTML = thermostat.updateTemp();
  });

  $("#lower").click(function () {
    thermostat.lowerTemperature();
    document.getElementById('tempupdate').innerHTML = thermostat.updateTemp();

  });

  $("#reset").click(function () {
    thermostat.resetTemperature();
    document.getElementById('tempupdate').innerHTML = thermostat.updateTemp();
  });

  $("#toggleEnergySaver").click(function () {
    thermostat.togglePowerSave();
  });

  $('#London').click(function() {
    city = 'London';
    getData();
  });

  $('#Moscow').click(function() {
    city = 'Moscow';
    getData();
  });

  $('#Grimsby').click(function() {
    city = 'Grimsby';
    getData();
  });

  function getData() {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "/id=524901&APPID=2a793cc57b61ac02fe9ef69d7f44e4f9", function(data) {
      $('#bla').text(data.main.temp);
      console.log(city);
    });
  }

  getData();


});
