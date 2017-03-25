import * as R from "ramda";

// Needed because R.match does not work in this case
const match =
  R.curry((what: RegExp, x: string) => x.match(what));

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

const words =
  (x: string) => R.split(' ', x);

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

const sentences = undefined;


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

const filterQs =
  (xs: Array<string>): Array<string> => R.filter(
    (x: string) => match(/q/i, x),
    xs
  );

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
const _keepHighest =
  (x: number, y: number) => x >= y ? x : y;

// REFACTOR THIS ONE:
const max =
  (xs: Array<number>) => R.reduce(
    (acc: number, x: number) => _keepHighest(acc, x),
    -Infinity,
    xs
  );


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
const slice = undefined;


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
const take = undefined;


export { words, sentences, filterQs, max, slice, take };
