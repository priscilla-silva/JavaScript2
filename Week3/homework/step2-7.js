'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

/* 
1. In the first function, the value of x was not affected because it was declared outside
of the function scope and if it's just console log it, it will come out as the same value,
despite being previously passed as an argument for the f1() function.

2. In the second function, y is an object. By calling val.x, we are modifying the x property 
of the y object (not the whole object), and therefore when we console log y, the result is
{x: 10} and not {x:9}
*/
