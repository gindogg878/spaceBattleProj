class Ships {
  constructor(hull, firepower, accuracy) {
    this.hull = 0;
    this.firepower = 0;
    this.accuracy = 0;
  }
  accuracyVal = function (accuracy) {
    if (Math.random() < alien.accuracy) console.log(`You've been hit!`);
  };
}
