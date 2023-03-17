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

  attackAlien = function (obj) {
    if (Math.random() < this.accuracy) {
      if (obj.hull > this.firepower) {
        obj.hull = obj.hull - this.firepower;
        console.log(obj.hull);
      } else if (obj.hull < this.firepower || obj.hul === this.firepower) {
        console.log(`You destroyed the enemy ship!`);
      }
    } else console.log("you missed the enemy ship!!! Prepare for attack!!!");
  };
}
class Alien extends Ships {
  constructor() {
    super();
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = Math.floor(Math.random() * 0.3) + 0.6;
  }

  attackShip(myshipHull) {
    if (myshipHull > this.firepower) {
      myshipHull = myshipHull - this.firepower;
      console.log(`Enemy Attacked and caused ${this.firepower} damage`);
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
console.log(ussPerScholas);
const sith = new Alien();
console.log(sith);
const answer = window.prompt("Attack?");
console.log(answer);
if (answer === "yes") {
  ussPerScholas.attackAlien(sith);
}

// let yourAttack = window.prompt("You destroyed a ship!!! Continue: yes or no?");
// console.log(yourAttack);
