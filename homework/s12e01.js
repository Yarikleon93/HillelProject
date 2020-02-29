// constructor function
function Car(color) {

  // closure
  let fuel = 40;

  // object properties
  this.color = color;
  this.name = 'car';
  this.odometr = 0;
  this.fuelConsumption = 7 / 100;

  // object methods
  this.drive = function(distance) {
    const fuelNeeded = distance * this.fuelConsumption;
    const fuelSpent = Math.min(fuel, fuelNeeded);
    fuel = fuel - fuelSpent;
    const realDistance = fuelSpent / this.fuelConsumption;
    this.odometr = this.odometr + realDistance;
    console.log(`${color} ${this.name} travelled ${realDistance}km. Fuel left ${fuel} liters`);
  }

  // TODO: implement refuel method
  this.refuel = function() {

  }

  this.showFuel = function() {
    console.log(fuel);
  }
}

const redCar = new Car('red');
const blueCar = new Car('blue');

redCar.drive(100);
redCar.drive(200);
blueCar.drive(100);

