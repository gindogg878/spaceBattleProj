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
      //   console.log(alienHull);
      Alien.attackShip();
    } else if (alienHull > 0) {
      while (alienhull) {
        alienHull - this.firepower;
      }
    } else alienHull < this.firepower;
    console.log("you've destroyed an alien ship!!!");
  };
}
class Alien extends Ships {
  constructor() {
    super();
    this.hull = Math.floor(Math.random() * 6) + 3;
    // this.hull = Math.random();
    this.firepower = Math.floor(Math.random() * 4) + 2;
    this.accuracy = Math.random() + 0.6;
  }

  attackShip(myshipHull) {
    if (myshipHull > this.firepower) {
      myshipHull = myshipHull - this.firepower;
      console.log(`Enemy Attacked and caused ${this.firepower} damage`);
      return;
    } else if (myshipHull < this.firepower) {
      console.log("The enemy has defeated you");
    }
  }
  //   accuracyVal = function (accuracy) {
  //     if (Math.random() < this.accuracy) console.log(`You've been hit!`);
  //   };

  //   hullVal = function (hull) {
  //     if (Math.random() < hull) {
  //       hull;
  //     }
  //   };
}

const ussPerScholas = new Myship();
// console.log(ussPerScholas);
const sith = new Alien();
console.log(sith);
const answer = window.prompt("Attack?");
console.log(answer);
if (answer === "yes") {
  ussPerScholas.attackAl(sith.hull);
}
console.log(sith);

// let yourAttack = window.prompt("You destroyed a ship!!! Continue: yes or no?");
// console.log(yourAttack);
