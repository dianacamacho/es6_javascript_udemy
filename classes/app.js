// Classes
/*
// constructor in ES5 to create new instances of Car

function Car5(options) {
  this.title = options.title;
}

Car5.prototype.drive = function() {
  return 'vroom';
}

// Toyota subclass of Car

function Toyota(options) {
// to hook up toyota to be a car, need to point Car methods to itself
  Car5.call(this, options);
  this.color = options.color;
}

// need to assign the protoype for Toyota and what constructor to use?
Toyota.prototype = Object.create(Car5.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const car5 = new Car5({
  title: 'Focus'
})
console.log(car5.drive());

const toyota = new Toyota({
  color: 'red',
  title: 'Daily Driver'
})

// Toyota instance using own and inherited Car5 methods
console.log(toyota.color);
console.log(toyota.title);
console.log(toyota.drive());
console.log(toyota.honk());

console.log('--------------- End ES5 -------------------')

*/


/*
// refactor with ES6 classes
console.log('--------------- Start ES6 -------------------')

class Car {
  //special constructor function to initialize properites
  constructor(options) {
    this.title = options.title
  }

  // could also use destructuting in the constructor :
  //constuctor({ title }) { this.title: title }


  // use enhanced object literal syntax for methods
  drive() {
    return 'vroom!';
  }
}
*/

/*
// all need to have Honda inherit from Car is to add 'extends' and Class inheriting from
// also need to include the parent class constructor using 'super()'
class Honda extends Car {
  constructor(options) {
    super(options); // calls the Car constructor with options passed to it
    // when calling super, don't use destructuring in constructor!, just pass in options object
    this.color = options.color;
  }

  honk() {
    return 'beep!'
  }
}

const car = new Car({ title: 'Cool Car' });
console.log(car.drive());

const honda = new Honda({
  color: 'blue',
})

console.log(honda.color);
console.log(honda.honk());

// Honda's inherited Car methods
console.log(honda.drive());
*/


// Coding Challenge with Classes

// You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

// Initialize the Monster's health to 100.
// The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

// Now that you have a monster created, create a subclass of the Monster called Snake.  

// The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
// The instance of Snake that is passed in should have their health deducated by 10

class Snake extends Monster {
  constructor(options) {
    super(options);
  }

  bite(snake) {
    snake.health -= 10;
  }
}

let snake1 = new Snake({ name: 'snake 1'});
let snake2 = new Snake({ name: 'snake 2'});

snake1.bite(snake2);

console.log(snake1.health);
console.log(snake2.health);