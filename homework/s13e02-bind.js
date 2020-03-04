// Почините электрочайник, используя методы сохранеия
// this, рассмотренные на занятии

const BOILING_TEMP = 100;
const KETTLE_INTERVAL_MS = 100;


function ElectricKettle() {
  this.boilInterval = null;
  this.temperature = 20;

  this.startBoil = function() {
    if (this.boilInterval) {
      this.say('Already boiling');
      return;
    }
    this.boilInterval = setInterval(this.heatUp, KETTLE_INTERVAL_MS);
  }

  this.heatUp = function() {
    this.temperature = this.temperature + 1;
    this.say(`I'm ${this.temperature}C`);
    if (this.temperature >= BOILING_TEMP) {
      clearInterval(this.boilInterval);
      this.boilInterval = null;
      this.say('[Whistling sound]')
    }
  }

  this.say = function(message) {
    console.log(message);
  }
}

const kettle = new ElectricKettle();

kettle.startBoil();

