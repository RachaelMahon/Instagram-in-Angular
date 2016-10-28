console.log("this runs")
function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.minimumTemperature = 10;
  this.maxTempWithPowerSave = 25;
  this.maxTempWithoutPowerSave = 32;
  this.maximumTemperature = this.maxTempWithPowerSave;
}

Thermostat.prototype.raiseTemperature = function () {
  this.temperature += 1;
};

Thermostat.prototype.lowerTemperature = function () {
  this.temperature -= 1;
};

Thermostat.prototype.togglePowerSave = function () {
  if (this.maximumTemperature === this.maxTempWithPowerSave) {
      this.maximumTemperature = this.maxTempWithoutPowerSave;
  }
  else {
    this.maximumTemperature = this.maxTempWithPowerSave;
  }
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.defaultTemperature;
};

Thermostat.prototype.energyUsage = function () {
  if(this.temperature < 18) {
    return 'low-usage';
  }
  else if(this.temperature > 17 && this.temperature < 25) {
    return 'medium-usage';
  }
  else if(this.temperature > 24) {
    return 'high-usage';
  }
};

Thermostat.prototype.updateTemp = function () {
  return thermostat.temperature;
};

var thermostat = new Thermostat();
