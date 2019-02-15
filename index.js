const {
  all,
  equals,
  into,
  filter,
  map,
  transduce,
  flip,
  append,
  tap,
  compose
} = require('ramda');

const equals3 = equals(3);

const xf = compose(
  filter(x => x === 3),
  map(x => x * 10)
); // xf is a transducer, reducer => reducer
// transformer in ramda is a reducer

console.log(into([], xf, [3, 2, 3, 3]));

//const fn = flip(append); // iterator function. (acc, c) => acc.concat(c), (acc, c) => append(c, acc)
//const fn = (acc, c) => flip(append)(acc, c);

const fn = (acc, c) => ({ ...acc, [c]: c });
const acc = {}; // initial accumulator value
console.log(transduce(xf, fn, acc, [3, 2, 3, 3]));
