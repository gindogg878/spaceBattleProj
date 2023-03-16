class Ships {
  constructor() {
    this.hull = 0;
    this.firepower = 0;
    this.accuracy = 0;
  }
}

class Myship extends Ships {
  constructor() {
    super();
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }

  attackAl = function (alienHull) {
    if (alienHull > this.firepower) {
      alienHull = alienHull - this.firepower;
    } else if (alienHull < this.firepower) {
      console.log("you've destroyed an alien ship!!!");
    }
  };
}
class Alien extends Ships {
  constructor() {
    super();
    this.hull = Math.random() * 10;
    this.firepower = Math.random() * 10;
    this.accuracy = Math.random();
  }
  accuracyVal = function (accuracy) {
    if (Math.random() < this.accuracy) console.log(`You've been hit!`);
  };

  hullVal = function (hull) {
    if (Math.random() < hull) {
      hull;
    }
  };
}

// const answer = window.prompt("Attack?");
// console.log(answer);
// let yourAttack = window.prompt("You destroyed a ship!!! Continue: yes or no?");
// console.log(yourAttack);
