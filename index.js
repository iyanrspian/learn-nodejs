const moment = require('moment');
const Tiger = require('./lib/Tiger');
const Wolf = require('./lib/Wolf');

const date = moment().format("Do MMM YYYY");

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
console.log(date);
