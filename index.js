const moment = require('moment');
const myOdd = require('lodash');
const fs = require('fs');
const Tiger = require('./lib/Tiger');
const Wolf = require('./lib/Wolf');
const { EventEmitter } = require('events');
const { resolve } = require('path');

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

const tiger = new Tiger();
const wolf = new Wolf();

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

// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// const myEmitter = new EventEmitter();

// myEmitter.on('birthday', birthdayEventListener);
// myEmitter.emit('birthday', 'Rispian');

// const fileReadCallback = (error, data) => {
//     if(error) {
//       console.log('Gagal membaca berkas');
//       return;
//     }

//     console.log(data);
// };

// fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});

// fighting(tiger, wolf);
// console.log(myOddEvenArray);
// console.log(date);
