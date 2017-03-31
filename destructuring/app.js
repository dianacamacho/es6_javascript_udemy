// Destructuring

// in ES5

/*
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

// words type and amount are duplicated a lot

// in ES6
// helps reduce duplicate code with destructuring

// not decalring an object here, the curly braces on the left of the = means that we are declaring a variable called type that is referencing the expense.type property value

const { type } = expense;
const { amount } = expense;

// but still duplicating code in terms of writing out const, etc, so with more ES6 can make it even shorter

// can combine both lines into: 

const { type, amount } = expense;
// this is declaring two new constant variables, type which is set yo expense.type and amount which is set to expense.amount (variable names must match the expense object properties you want to call)

*/

/*
// Destructuring the Arguments Object in functins

// can pull properties from objects passed to functions

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

let fileSum = fileSummary(savedFile);
console.log(fileSum);

// in the function, we are using the word 'file' a lot to call the values

// instead of giving the parameter as 'file', can pass the file properties in {} and then just call the property names directly inside the function

// refactored function with destructuring

function fileSummary({ name, extension, size}) {
  return `The file ${name}.${extension} is of size ${size}`;
}

*/


// Destructuring Arrays

/*
const companies = [
  'Google',
  'Facebook',
  'Uber',
  'Lyft'
];

// usually would do
const firstCompany = companies[0]

// but with array destructing can do and set the elements into variables, even more than one at a time
const [ name, name2, name3 ] = companies;

// will match each variable in array to element in companies array in that order

// so, name = 'Google', name2 = 'Facebook', name3 = 'Uber'

*/

/*
// Can use Spread Operator to help with destructuring arrays

const [ name, name2, ...rest] = companies;

console.log(name); // 'Google'
console.log(name2); // 'Lyft'
console.log(...rest); // gives whatever is left in the array, ['Uber', 'Lyft']

*/

// Mixing Destructing for Objects and Arrays

/*
const companies = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Menlo Park'},
  { name: 'Uber', location: 'San Francisco'}
];

// in ES5 to get location of google would do something like this:

var location = companies[0].location;

// in ES6, can mix array and object destructing to do the same

const [ { location } ] = companies
// first, use [] to reach into companies array and retrieve the first element, which is an object

// then inside, do one more layer of destructing on object using {} to pull out location property of that object element

*/

/*
const Google = {
  locations: ['Mountain View', 'New York', 'London']
}

// use destructing to get access to Mountain View location for Google object

// first need to pull off the locations property, which is done with { locations } to give the array of locations

// then need to guide destructuring on how to pull off first element of the locations array

const { locations: [ location] } = Google;
console.log(location);

*/

/*
// real world array destructuring example

const points = [
  [4,5],
  [10,1],
  [0,40]
];

// we recieve data like this from an api, but we need is formatted as array of objects like 


[ 
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 },
]


// in ES5, could have used a for loop to loop through array pairs and then push into new array as objects but would take a lot of code

// in ES6, can use array map helper with destructing to pass in [x,y] to map inner function which is really passing in two arguments, x and y set to the values of the current inner array element as we iterate through points array.

// Then return as object where set { x: x, and y: y }, but since key and value names match can shorten even more to just { x, y}

points.map(([ x, y ]) => {
  return { x, y};
}); 

*/

// Coding Challenge with Destructuring

// The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?

/*
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

// refactored with destructing solution:

function isEngineer({ title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

*/

// The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

/*
An array for a class has the form [subject, time, teacher]

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
*/

/*
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
  }
);

// Reason you need the {} around the return line in this case instead of it allowing an implicit return? Because the curly bracket '{' after arrow => is being interpreted as "oh, you want to have multiple lines expressions in this arrow function" instead of being interpreted as 'implicity lreturn this object', and therefore you lose the implicit "return" and need to wrap it in another set of {} or wrap the implicit return in (). 

*/

// This one is probably the hardest exercise in the entire course!  

/*
Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]

*/

const numbers = [1, 2, 3];


// helper way

function doubled(array) {
  return array.map((el) => el * 2);
}

// console.log(doubled(numbers));

// destructuring, recursion, rest/spread way
console.log('with destructuring:');

function double([number, ...rest]) {
    if (!number) {
        return rest;
    }else {
        return [number * 2, ...double(rest)];
    }
}

// double(numbers);
console.log(double(numbers));
