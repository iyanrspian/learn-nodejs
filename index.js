const moment = require('moment');
const myOdd = require('lodash');
const Tiger = require('./lib/Tiger');
const Wolf = require('./lib/Wolf');

const date = moment().format("Do MMM YYYY");
const myOddEvenArray = myOdd.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);
console.log(myOddEvenArray);
console.log(date);
