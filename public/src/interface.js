$(document).ready(function () {

  // document.write(thermostat.updateTemp());
document.getElementById('tempupdate').innerHTML = thermostat.temperature();

  $("#raise").click(function () {
    thermostat.raiseTemperature();
    document.getElementById('tempupdate') = thermostat.temperature();
  });

  $("#lower").click(function () {
    thermostat.lowerTemperature();
  });

  $("#reset").click(function () {
    thermostat.resetTemperature();
  });

  $("#toggle").click(function () {
    thermostat.togglePowerSave();
    document.getElementById('tempupdate') = thermostat.temperature();
  });

})
