/*
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    });
  }
}

// let summary = team.teamSummary();
// console.log(summary);

*/

/*
calling teamSummary returns this.teamName as undefined
// ["Jane is on team undefined", "Bill is on team undefined"]

this is because calling an anonymous function and passing it off to map. The this var of the anon function does not point to the object, but instead to the global object (the window) because the window is the default global object for regular functions

one way we could try to solve this is by calling bind, to bind the anon function context to the current context of the object function beng called;


const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
}

let summary = team.teamSummary();
console.log(summary);

*/

// arrow functions help solve this

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
}

// now calling the teamSummary function works. all we did was turn the anon function called for map to an arrow function, which fixes this problem because arrow functions have lexical 'this'

// this is therefore set to the surrounding context so points back to outer functions context which is tied to the object we are trying to access

let summary = team.teamSummary();
console.log(summary);

