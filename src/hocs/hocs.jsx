import React from 'react';

// this is used all over the place
// we can't just modify it!!!
// many people expect the old behavior!!!
function logNumber(num) {
  // 20 lines of code!!
  return `numba ${num}`;
}

// // this bad!!!!!!!!!!!!!!!!!!!!!!!!!
// export function improvedLogNumber(num) {
//   // 20 lines of code!! <- these lines are the same!
//   return `This is the wonderful number ${num}`;
// }

// this higher order function takes a function and returns "improved" function
// without messing with the internals of the function
function withImprovement(func) {
  return function improved(num) {
    return `This is the wonderful ${func(num)}`;
  };
}

function greet(name) {
  return `Hello, ${name}`;
}

function improver(func) {
  return function improvedFunc(name) {
    return `${func(name).toUpperCase()}`;
  };
}

// log the meh and the improved:
const meh = greet;
const improved = improver(meh);

console.log(meh('Tom'));
console.log(improved('Josh'));

export function withMagicProp(Component) {

}

export function withAuthCheck(Component) {

}
