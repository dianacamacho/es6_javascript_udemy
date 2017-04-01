// Generators

// declare a generator like normal function but with asterisk either after function or before name

/*

function* numbers() {

}

// or 

function *numbers() {

}

*/

/*
function* shopping() {
  // stuff on the sidewalk

  // walking down sidewalk

  // go into the store with cash

  const stuffFromStore = yield 'cash';

  // walking back home
  return stuffFromStore;

}

// stuff in the store

const gen = shopping();
console.log(gen.next()); 
// leaving our house, first call to gen.next() is when you leave house and start walking down sidewalk, first time you start running code in function

// Keeps going until you reach the yield statement, whose value is assigned to a variable 
// When we reach yield, that is the transition point
// We are now leaving the function and entering the store

// walk into store
// walk through aisles
// purchase stuff

// Call gen.next('newValue') again with new value
// this is the transition to go leave store and start heading back home
console.log(gen.next('groceries')); 
// leaving the store with groceries
// the new yield value updates the variable 
// keeps going until end of functino code which returns that variable as 'groceries'


// Can call yield multiple times inside generator, for each one will need another gen.nex(‘value’) call

*/

/*
// Generators work perfectly with For Of Loops

function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

// generator object
const gen = colors();
gen.next(); // enters generator up to first yield, which gives 'red'
gen.next(); // re-enter until next yield, which gives 'blue'
gen.next(); // re-enter again until next yield, giving 'green'
gen.next(); // finished the function, done set to true

const myColors = [];

for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors); // get ['red', 'blue', 'green']

// Every time we yield a value in generator, it creates a single run of our For Of Loop and we don't need to call .next() to keep running through the generator, the loop takes care of it

*/

/*
// Generators help us iterate through more types of data stuctures, not just arrays and loops

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// our generator function
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

// can use the generator to iterate over and yield very particular properties of the engineeringTeam object, ignoring the other properties we don't need

// using for loop with generator can help us retrieve list of people on the engineering team from the engineeringTeam object

const teamMembers = [];

for (let name of TeamIterator(engineeringTeam)) {
  // let's us save yield value from generator into name variable and push it into the teamMembers array
  teamMembers.push(name);
}

console.log(teamMembers); // gives us ['Jill', 'Alex', 'Dave']
*/

/*
// Generator Delegation

// we added a testing team that belongs to the engineering team and has its own lead and tester, which should also be included in the teamMembers name list

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeam
};

// need to figure out how to modify teamIterator so it will also iterate through testingTeam

// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
// }

// we could just add yield team.testingTeam.lead, etc to the exisiting generator. but want a more resusable option, which will require a second generator function

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

// also want to be able to use both generators with a single for loop, so need to combine the two generators

// want to delegate from the TeamIterator down to the TestingTeamIterator

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;

  // calling the second generator inside of the TeamIterator, and passing it the testingTeam
  const TestingTeamGenerator = TestingTeamIterator(team.testingTeam);

  // have the testingTeam members be yielded here
  yield* TestingTeamGenerator
  
}


const teamMembers = [];

for (let name of TeamIterator(engineeringTeam)) {
  // let's us save yield value from generator into name variable and push it into the teamMembers array
  teamMembers.push(name);
}

console.log(teamMembers); // gives us ['Jill', 'Alex', 'Dave', 'Amanda', 'Bill'] for the full set of team names

*/

/*
// Symbol Iterator in ES6

// can use symbol iterator to clean up previous code more

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

// the symbol iterator tells the for of loop how to iterate of the object

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeam
};

// now just one team iterator

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* team.testingTeam;
}

// yield* now causes the for of loop to fall into iteration over team.testingTeam

// so now the for of loop is going to look for a key of Symbol.iterator, and if it finds it, it will use the generator that it points at to do the iteration

const names = [];

for( let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names); 
// ["Jill", "Alex", "Dave", "Amanda", "Bill"]

*/

/*
// Now can refactor engineering team to include symbol iterator

// can use symbol iterator to clean up previous code more and remove the external generator

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

// the symbol iterator tells the for of loop how to iterate of the object

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeam,
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
    // yield* telling it also need to iterate over this object it's pointing to
  }
};

// now can get rid of all external iterators, since all defined inside objects with [Symbol.iterator]

const names = [];

for( let name of engineeringTeam) {
  names.push(name);
}

console.log(names); 
// ["Jill", "Alex", "Dave", "Amanda", "Bill"]
*/


// Generators with Recursion

// Tree symbol iterator example with classes

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  // slightly different syntax for symbol iterator in a class than an object

  *[Symbol.iterator]() {
    yield this.content;
    for(let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh comment', [])
];

const tree = new Comment('great post!', children);

const values = [];

for(let value of tree) {
  values.push(value);
}

console.log(values);

