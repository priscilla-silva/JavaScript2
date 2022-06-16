'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  let newArr = [... new Set(arr)];
  return newArr;

  /* Set objects are collections of values. You can iterate through the elements 
  of a set in insertion order. A value in the Set may ONLY OCCUR ONCE; it is unique 
  in the Set's collection. 
  
  Because each value in the Set has to be unique, the value equality will be checked. 
  */
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
//module.exports = makeUnique;
