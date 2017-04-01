// Promises and Fetch

// resolve and reject automatically passed in
/*
let promise = new Promise((resolve, reject) => {
  reject()
});

console.log(promise);

promise
  .then(() => console.log('finally finished'))
  .then(() => console.log('i also ran!'))
  .catch(() => console.log('uh oh!'))
*/

// Promise object is available in the browser

// It's up to us when to resolve or reject a promise by calling resolve() or reject()

// if call resolve() in the promise will see both of the above then function callbacks to log statements to the console

// if call reject(), will see the catch callback log it's 'uh oh' statement to the console. if don't define a catch callback, will get error telling you to handle the promise rejection


let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(data => console.log(data))

// response from fetch does not immediately have the data. to get back the data, need to call a method on it

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))

// need to call json() first and then after that should have access to data
