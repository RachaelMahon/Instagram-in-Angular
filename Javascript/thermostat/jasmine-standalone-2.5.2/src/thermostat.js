'use strict';

function Thermostat () {
  this.powerSaverStatus = true;
  this.currentTemperature = 20;
  this.MINIMUM_TEMP = 10;
  this.POWER_SAVE_OFF_MAXIMUM_TEMP = 32;
  this.POWER_SAVE_ON_MAXIMUM_TEMP = 25;
  this.DEFAULT_TEMP = 20;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
};

Thermostat.prototype.temperature = function () {
  return this.currentTemperature;
};

Thermostat.prototype.upButton = function() {
  if (this.isMaximumTemperature()) {
  return
  }
    this.currentTemperature += 1;
  };

  Thermostat.prototype.isMaximumTemperature = function() {
    if (this.isPowerSaverOn()) {
      return this.currentTemperature === this.POWER_SAVE_ON_MAXIMUM_TEMP;
    }
    return this.currentTemperature === this.POWER_SAVE_OFF_MAXIMUM_TEMP;
  };

  Thermostat.prototype.downButton = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.currentTemperature -= 1;
  };

Thermostat.prototype.isMinimumTemperature = function() {
  return this.currentTemperature === this.MINIMUM_TEMP;
};

Thermostat.prototype.resetTemp = function () {
  this.currentTemperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.isPowerSaverOn = function () {
 return this.powerSaverStatus === true;
};

Thermostat.prototype.switchPowerSavingOff = function() {
    this.powerSaverStatus = false;
};

Thermostat.prototype.switchPowerSavingOn = function() {
    this.powerSaverStatus = true;
};

Thermostat.prototype.energyUsage = function () {
  if (this.currentTemperature < this.MEDIUM_ENERGY_USAGE_LIMIT ) {
    return 'low';
  }
  if (this.currentTemperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.currentTemperature <= this.POWER_SAVE_ON_MAXIMUM_TEMP ) {
    return 'medium';
  }
  if (this.currentTemperature > this.POWER_SAVE_ON_MAXIMUM_TEMP) {
    return 'high';
  }
};
