import * as R from "ramda";

const match =
  R.curry((what: RegExp, x: string) => x.match(what));

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

const words =
  R.split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

const sentences =
  R.map(words);

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

// var filterQs = function (xs) {
// return filter(function (x) { return match(/q/i, x); }, xs);
// };

const filterQs =
  R.filter(match(/q/i));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest =
  (x: number, y: number) => x >= y ? x : y;

// REFACTOR THIS ONE:
var max =
  (xs: Array<number>) => R.reduce(_keepHighest, -Infinity, xs);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice =
  R.curry((start: number, end: number, xs: Array<any>) => xs.slice(start, end));


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take =
  R.curry((n: number, xs: Array<any>) => slice(0, n, xs));


export { words, sentences, filterQs, max, slice, take };
