const moment = require('moment');
const myOdd = require('lodash');
const Tiger = require('./lib/Tiger');
const Wolf = require('./lib/Wolf');
const { EventEmitter } = require('events');

const date = moment().format("Do MMM YYYY");
const myOddEvenArray = myOdd.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
const myEventEmitter = new EventEmitter();

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

const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

const tiger = new Tiger();
const wolf = new Wolf();

// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });

const myEmitter = new EventEmitter();

myEmitter.on('birthday', birthdayEventListener);
myEmitter.emit('birthday', 'Rispian');

fighting(tiger, wolf);
// console.log(myOddEvenArray);
// console.log(date);
