const F = require('../fp');

let _ = F.placeholder;
const parseInt10 = F.partial(parseInt, _, 10);
const parseInt16 = F.partial(parseInt, _, 16)
const parseInt2 = F.partial(parseInt, _, 2);

console.log((parseInt10('10'))); // => 10
console.log((parseInt16('10'))); // => 16
console.log((parseInt2('10'))); // => 2
