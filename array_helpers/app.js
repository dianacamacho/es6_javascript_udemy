
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

*/

var posts = [{ id: 1, title: 'New Post 1'}, { id: 2, title: 'Old Post 2'}];

var comment = { postId: 1, content: 'awesome' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

var post = postForComment(posts, comment);
console.log(post);

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

/*

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

