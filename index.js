const { all, equals, into, map } = require('ramda');

const equals3 = equals(3);

const xf = all(equals3); // xf is a transducer, reducer => reducer
// transformer in ramda is a reducer

console.log(into([], xf, [3, 2, 3, 3]));
