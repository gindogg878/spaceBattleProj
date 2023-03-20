class Ships {
  constructor() {
    this.hull = 0;
    this.firepower = 0;
    this.accuracy = 0;
  }
}
let i = 0;
attack = function (good, bad) {
  // while (good.hull > 0 && bad.hull > 0) {
  while (good.hull > 0) {
    if (i > 5) {
      console.log("all aliens are destroyed");
      break;
    }
    if (Math.random() < good.accuracy) {
      bad.hull = bad.hull - good.firepower;
      if (bad.hull <= 0) {
        console.log("You have destroyed the ship!!!" + i);
        // console.log("Do you want to continue towards complete victory?");
        let answer = window.prompt(
          "Do you want to continue towards complete victory?"
        );

        // console.log(answer);
        if (answer === "no") {
          break;
        }
        i++;
        // return answer;
      } else if (bad.hull > 0) {
        console.log("Shiped survived attack. Prepare to be attacked!!!");
        if (Math.random() < bad.accuracy) {
          good.hull = good.hull - bad.firepower;
          if (good.hull > 0) {
            console.log(
              `Enemy attacked with ${bad.firepower} point damage. Prepare to return fire!`
            );
          } else if (good.hull <= 0) {
            console.log("The enemy has destroyed you!!!");
            // return 0;
            break;
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
    this.accuracy = Math.random() * 0.7 + 0.2;
  }
}
const aliens1 = [];
// code to create alien ships into array of alienShips
// generateAlienShips() {
for (let i = 0; i < 6; i++) {
  const tieFighter = new Alien();
  aliens1.push(tieFighter);
}
// }

console.log(aliens1);
// const ussPerScholas = new Myship();
// console.log(ussPerScholas);
// const sith = new Alien();
// console.log(sith);
// let answer = window.prompt("Attack?");
// console.log(answer);
// if (answer === "yes") {
//   ussPerScholas.attack(ussPerScholas, sith);
// }
// sith.generateAlienShips();
// console.log(sith.aliens);
// console.log(sith.aliens[0]);
const startEnd = function () {
  const ussPerScholas = new Myship();
  const sith = new Alien();
  // sith.generateAlienShips();
  // let i = 0;
  while (aliens1.length >= i) {
    let response = window.prompt("Attack? Yes or No");

    if (response.toLowerCase() === "yes") {
      // while (sith.aliens.length >= 0) {
      let answer = attack(ussPerScholas, aliens1[i]);
      i++;
      // console.log(answer);
      if (response === "yes") {
        aliens1.shift();
      } else {
        console.log("You lost the will to fight");
      }
    } else if (response === "no") {
      window.alert("Maybe next time.");
      break;
    } else {
    }
  }
};

startEnd();
