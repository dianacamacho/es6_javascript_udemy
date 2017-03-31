
// ----- ARRAY HELPERS ----- 

/*
// old for loop

var colors = ['red', 'blue', 'green'];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach 

colors.forEach(function(color) {
  console.log(color)
});

var numbers = [1,2,3,4,5];

var sum = 0;

function adder(num) {
  sum += num;
  console.log(sum);
}

numbers.forEach(adder);

*/

/*
// Coding Challenge Moving Way From For Loops

// The code below is calling 'savePost' three times, but it is doing so using a for loop.  This implementation works, but the for loop makes it more challenging to understand the purpose of the function.  Rather than using a for loop, refactor the code below to instead use the forEach helper.


function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

// Refactored Solution

function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  posts.forEach(savePost);
}

// The array below contains an array of objects, each of which is a representation of an image.  Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  The area of an image can be calculated as 'image.height * image.width'.

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

function calcArea(img) {
    areas.push(img.height * img.width);
}

images.forEach(calcArea);

*/

// more array helpers with ES6

/*
// For Of Loop
// another way of iterating through array 

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

const numbers = [1,2,3,4,5];
let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total);
*/

/*
// Map

var numbers = [1,2,3,4,5];
var doubledNumbers = []

// with for loop

for(var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// with Map helper

var doubled = numbers.map(function(num) {
  // make sure you have return keyword in map
  return num * 2;
})

console.log(doubledNumbers)
console.log(doubled)

// both give the same result, but map did it with less code. didn't even need to declare empty array to push changed values to, since map auto adds returned value to brand new result array and returns that new array at the end.

var cars = [
  { model: 'Buick', price: 'Cheap'},
  { model: 'Camaro', price: 'Expensive'}
];

var prices = cars.map(function(car) {
  return car.price
})

// returns ['Cheap', 'Expensive']
// so map is good way to pluck, or collect, properties from array of object data

*/


/* 
//Coding Challenge

// Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(img) {
   return img.height 
});


// Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance / trip.time; 
});


// This is a hard one!

Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

Example: 

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

function pluck(array, prop) {
  var props = array.map(function(el) {
    return el[prop];
  });
  return props;
}
*/

/*
// Filter

// with for loop

var products = [
  { name: 'banana', type: 'fruit', quantity: 0, price: 1 },
  { name: 'cucumber', type: 'vegetable', quantity: 10 , price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30 , price: 13},
  { name: 'apple', type: 'fruit', quantity: 3, price: 5 },
  { name: 'orange', type: 'fruit', quantity: 12, price: 40}
];

var filteredProducts = [];

for(var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

// with Filter

var veggies = products.filter(function(product) {
  // make sure to include return keyword
  return product.type === 'vegetable';
});

console.log(veggies);

// Filter to return list of products where quantity > 0 and price is less than 10

var cheapProducts = products.filter(function(prod) {
  return prod.quantity > 0 && prod.price < 10;
});
console.log(cheapProducts);

var post3 = { id: 3, title: 'New Post 4'};
var post4 = { id: 4, title: 'New Post 4'};

var comments = [
  { postId: 4, content: 'awesome' },
  { postId: 3, content: 'ok' },
  { postId: 4, content: 'good' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post4, comments);
// should return array with two comments for post 4

*/

/*
// Coding Challenge

// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(num) {
  return num > 50;
});
console.log(filteredNumbers);

// Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
  return user.admin;
});

console.log(filteredUsers);

// This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

var numbers = [10, 20, 30];

function greaterThanFifteen(num) {
  return num > 15;
}

function reject(array, iteratorFunction) {
  return array.filter(function(el) {
    return !(iteratorFunction(el));
  });
}

var less15 = reject(numbers, greaterThanFifteen);
console.log(less15); // should return [10]

*/

/*
// Find

// Find user with name 'Alex'
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' },
];

var user;

// with for loop

for(var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

console.log(user);

// with find helper

var alex;

alex = users.find(function(user) {
  return user.name === 'Alex';
})

console.log(alex);

// use find to find car of particular model

function Car(model) {
  this.model = model;
}

var cars = [new Car('Buick'), new Car('Camaro'), new Car('Focus')];

var buick = cars.find(function(car) {
  return car.model === 'Buick';
});

console.log(buick);


var posts = [{ id: 1, title: 'New Post 1'}, { id: 2, title: 'Old Post 2'}];

var comment = { postId: 1, content: 'awesome' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

var post = postForComment(posts, comment);
console.log(post);

*/

/*
// Coding Challenge with Find

// Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
  return user.admin;
});

// Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(acct) {
  return acct.balance === 12;
});


// This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we had a shorthand syntax to find an object like this:


findWhere(ladders, { height: '20 feet' });

The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';


Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

In summary:

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  var key = Object.keys(criteria)[0];
  var value = criteria[key];
  return array.find(function(el) {
    return el[key] === value;
  });
}

var ladder = findWhere(ladders, { height: 25 });
console.log(ladder);

*/


/*
// Every and Some helpers

// with for loop

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanUseProgram = true;
var onlySomeComputersCanUseProgram = false;

for(var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanUseProgram = false;
  } else {
    onlySomeComputersCanUseProgram = true;
  }
}

// with every and some helpers

// do all of the computers have > 16 ram
var allCompsCanUseProgram = computers.every(function(comp) {
  return comp.ram > 16;
});

console.log(allCompsCanUseProgram); // false

// do some / at least one computer have > 16 ram
var someCompsCanUseProgram = computers.some(function(comp) {
  return comp.ram > 16;
});

console.log(someCompsCanUseProgram); // true

// Example of practical use of every helper

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 6;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

// instead of calling .validate over and over again on each field, every helper is good alternative

var fields = [username, password, birthdate];

// use every to validate all fields in one go and check if all pass the validations. shoudl return true/false

var formIsValid = fields.every(function(field) {
  return field.validate();
});

console.log(formIsValid); // false, since password is not > 6 characters long

*/

/*
// Coding Challenges for Every and Some

// Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
  return user.hasSubmitted;
});


// Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
  return request.status === 'pending';
});

*/


/*
// Reduce helper

// with for loop, getting sum of numbers array requires outside counter and adding each to the counter to save the final count in the counter var

var numbers = [10,20,30];
var sum = 0;

for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 60

*/

// with reduce helper, takes in function where we put  calculation code. the function takes in prev value/sum and current value (also index, array), then takes second argument which is an initial value that's passed to the function (so really it becomes the previous value) as point of where to start the sum. after iterating, it returns the sum of all the array elements

// the initialVal is actually the first arg passed to the function and that keeps getting passed and added on to/changed

/*

array.reduce(function(prev, curr, index, array) {
  previous.push(curr.property);
}, initialVal);

*/

// reduce to add and get final sum of array elements
/*
var numTotal = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(numTotal); // 60


// reduce to return array of strings

var colors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

// here our initial value for reduce is an empty array

// the array will be passed as initial val every time, with new color string getting pushed into it every time it is passed in
// goal is to return an array with colorObject color strings as elements

var colorStringArray = colors.reduce(function(previous, currentVal, index, array) {
  var currentColorString = currentVal.color;
  previous.push(currentColorString);
  // make sure to return the updates version of the previous value!
  return previous
}, []);

console.log(colorStringArray);
*/

// common whiteboarding question with reduce

// checking if parens in string are balanced

// make function that takes string and returns boolean 
/*
function balancedParens(string) {
  // first, since reduce is array helper, need to convert string to array

  // ! used because the reduce will return 0 if balanced which is falsey, so negate it to return boolean of true meaning parens are balanced

  return !string.split("").reduce(function(prev, curr) {
    if (prev < 0) { return prev; }
    // since negative means we're starting with a closing parenthesis so unbalanced
    if (curr === "(") { return ++prev; }
    if (curr === ")") { return --prev }
    return prev;
  }, 0);

  // initial value will be counter starting at 0, every time have opening parenthesis increase counter by 1, every time closing parenthesis decrease counter by 1

  // at end, if have counter greater than 0, then has to be unbalanced
}

var isBalanced = balancedParens("(((("); // should get false, unbalanced
console.log(isBalanced); // false

var isNotBalanced = balancedParens("(()())");
console.log(isNotBalanced); // true
*/

/*

Note: difference between number++ and ++number
Using the incrementor before a variable will first increment the value of the variable and then use this value.
Using the incrementor after a variable will use the current value of the variable, and then increment the variable after.

*/

/*
// Coding challenges with reduce

// Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(prev, curr) {
   return  prev + curr.distance;
}, 0);

console.log(totalDistance);


// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, curr) {
    if ( curr.type === 'sitting') {
      prev.sitting++;
    } else if (curr.type === 'standing') {
      prev.standing++;
    }
    return prev
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

// Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

// For example, given the following array:
var numbers = [1, 1, 2,0, 3, 0, 4, 4];

// Your function should return [1, 2, 3, 4]

function unique(array) {
  return array.reduce(function(prev, current) {
    if (prev.indexOf(current) === -1 ) {
      prev.push(current)
    }
    return prev
  }, []);
}

var uniqueResult = unique(numbers);
console.log(uniqueResult);

*/

