
describe('Thermostat', function() {
  thermostat = new Thermostat();

  describe('Temperature behaviour', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

    it('increases by 2 degrees with up-button', function() {
      thermostat.upButton()
      expect(thermostat.temperature()).toEqual(21);
    });

    it('decreases by 2 degrees with down-button', function() {
      thermostat.downButton()
      expect(thermostat.temperature()).toEqual(20);
    });

    it('has a minimum temperature of 10 degrees', function() {
      for (var i = 0; i < 20; i++) {
        thermostat.downButton();
      }
      expect(thermostat.temperature()).toEqual(10);
    });

    it('is reset to default by reset button', function() {
      thermostat.resetTemp();
      expect(thermostat.temperature()).toEqual(20);
    });

    it('power saving mode is on by default', function() {
      expect(thermostat.isPowerSaverOn()).toEqual(true);
    });


    it('power saving mode on restricts max to 25', function() {
      for (var i = 0; i < 20; i++) {
        thermostat.upButton();
      }
      expect(thermostat.temperature()).toEqual(25);
    });

    it('power saving mode off restricts max to 32', function() {
      thermostat.switchPowerSavingOff();
      for (var i = 0; i < 20; i++) {
        thermostat.upButton();
      }
      expect(thermostat.temperature()).toEqual(32);
    });

    it('is low-usage when temp below 18', function() {
      thermostat.currentTemperature = 17;
      expect(thermostat.energyUsage()).toEqual('low');
    });

    it('is medium-usage when temp between 18 and 25', function() {
      thermostat.currentTemperature = 20;
      expect(thermostat.energyUsage()).toEqual('medium');
    });

    it('is high-usage when temp above 25', function() {
      thermostat.currentTemperature = 26;
      expect(thermostat.energyUsage()).toEqual('high');
    });
  });
});
