import { words, sentences, filterQs, max, slice, take } from "./curry_exercises";
import * as chai from  "chai";

const assert = chai.assert;

describe("Curry Exercises", () => {

  it('Exercise 1', () => {
    assert.deepEqual(words("Jingle bells Batman smells"), ['Jingle', 'bells', 'Batman', 'smells']);
  });


  it('Exercise 1a', () => {
    assert.deepEqual(sentences(["Jingle bells Batman smells", "Robin laid an egg"]), [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']]);
  });

  it('Exercise 2', () => {
    assert.deepEqual(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']), ['quick', 'quarry', 'quails']);
  });

  it('Exercise 3', () => {
    assert.equal(max([323, 523, 554, 123, 5234]), 5234);
  });

  if (slice != undefined) {
    it('Curry Bonus 1', () => {
      assert.deepEqual(slice(1)(3)(['a', 'b', 'c']), ['b', 'c']);
    });
  }

  if (take != undefined) {
    it('Curry Bonus 2', () => {
      assert.deepEqual(take(2)(['a', 'b', 'c']), ['a', 'b']);
    });
  }

});
