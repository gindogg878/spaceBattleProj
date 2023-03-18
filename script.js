class Ships {
  constructor() {
    this.hull = 0;
    this.firepower = 0;
    this.accuracy = 0;
  }

  attack = function (good, bad) {
    while (good.hull > 0 && bad.hull > 0) {
      if (Math.random() < good.accuracy) {
        bad.hull = bad.hull - good.firepower;
        if (bad.hull <= 0) {
          console.log("You have destroyed the ship!!!");
          console.log("Do you want to continue towards complete victory?");
        } else if (bad.hull > 0) {
          console.log("Shiped survived attack. Prepare to be attacked!!!");
          if (Math.random() < bad.accuracy) {
            good.hull = good.hull - bad.firepower;
            if (good.hull > 0) {
              console.log(
                `Enemy attacked with ${bad.firepower} point damage. Prepare to return fire!`
              );
            } else if (good.hull < 0) {
              console.log("The enemy has destroyed you!!!");
              return 0;
            }
          } else {
            console.log("Enemy missed! Counter attack!!");
          }
        }
      } else {
        console.log("You missed your target! Prepare to be attacked");
        if (Math.random() < bad.accuracy) {
          good.hull = good.hull - bad.firepower;
          if (good.hull > 0) {
            console.log(
              `Enemy attacked with ${bad.firepower} point damage. Prepare to return fire!`
            );
          } else if (good.hull < 0) {
            console.log("The enemy has destroyed you!!!");
            return 0;
          }
        } else {
          console.log("Enemy missed! Counter attack!!");
        }
      }
    }
  };
}

class Myship extends Ships {
  constructor() {
    super();
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}

class Alien extends Ships {
  constructor() {
    super();
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = Math.floor(Math.random() * 0.3) + 0.6;
    this.aliens = [];
  }
  //code to create alien ships into array of alienShips
  // generateAlienShips() {
  //   const tieFighter = new Alien();
  //   this.aliens.push(tieFighter);
  // }
}

const ussPerScholas = new Myship();
console.log(ussPerScholas);
const sith = new Alien();
console.log(sith);
let answer = window.prompt("Attack?");
console.log(answer);
if (answer === "yes") {
  ussPerScholas.attack(ussPerScholas, sith);
}
