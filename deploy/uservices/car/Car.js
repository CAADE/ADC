const config = require("./config");
const colors = [ "Black", "White", "Red", "Gray", "Blue", "Yellow" ];

// Steamed Data JSON
//  vin:
//  longitude:
//  latitude:
//  velocity:
//  accident: true | false
//  outsideTempature:
//  insideTempature:
module.exports = class Car {
  constructor() {
    this.vin = "123456788901234"; // Randomly generate a string
    this.accident = false;
    this.outsideTempature = 10;
    this.insideTempature = 20;
    this.color = colors[(Math.random() * colors.length)-1];
  }
  generateData() {
    if((Math.random()/config.car.accidents) < 1) {
      this.accident = true;
    }
    this.longitude += Math.random();
    this.latitude +=  Math.random();
    this.outsideTempature += (Math.random()*3) - 3;
    this.outsideTempature += (Math.random()*3) - 3;
    return this;
  }
};
