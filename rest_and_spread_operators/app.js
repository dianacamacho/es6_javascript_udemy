// Rest Operator

// rest operator is used in function arguments when want to capture a list of arguments as an array


function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

var numSum = addNumbers(1,2,3,4,5,6,7);
console.log(numSum);

// passing individual comma sep numbers to the function as an array using the rest operator


// Spread Operator

// used to spread out values?

// can use to join arrays to create new array

const defaultColors = ['red', 'green'];
const faveColors = ['blue', 'gray'];
const fallColors = ['orange', 'brown'];

let colors = [...defaultColors, ...faveColors, ...fallColors];

console.log(colors); 
// prints ['red', 'green', 'blue', 'gray', 'orange', 'brown']


// can also add in new elements while concatenating the other arrays

let moreColors = [...defaultColors, 'pink', 'silver', ...faveColors, ...fallColors];

console.log(moreColors);
// ["red", "green", "pink", "silver", "blue", "gray", "orange", "brown"]


// can mix and match use of rest adn spread operators

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items];
  }

  return items
}

let list = validateShoppingList('apples', 'bananas');
console.log(list);
// ['milk', 'apples', 'bananas']

// so apples and bananas were placed into array using rest operator and then milk was added in using spread 


const MathLibrary {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  }
}


// can use rest operator to pass list of args to function, will be like an array with each elem being passes in an individual element 

const MathLibrary {
  calculateProduct(...restArgs) {
    console.log('Please use multiply method instead');
    return this.multiply(...restArgs);

    // instead of duplicating code in the two methods, calling the multiply method within the deprecated one and passing the arguments to the functions via the rest operator
  },
  multiply(a, b) {
    return a * b;
  }
}

// Coding Challenge with Rest Operator

// Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.

/*

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

*/

function product(...args) {
  var numbers = [...args];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// Refactor using the spread operator

/*

function join(array1, array2) {
  return array1.concat(array2);
}

*/

function join(array1, array2) {
  return [...array1, ...array2];
}


// Refactor the following to use only the rest operator

/*

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

*/

function unshift(array, ...args) {
  return [...args].concat(array);
}