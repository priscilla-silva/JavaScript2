'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

    let numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
  
   numbers.forEach(x => {
    if (x % 3 === 0) threeCallback(x)
    if (x % 5 === 0) fiveCallback(x)
  });
console.log(numbers)
  
}
  
  //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);

function sayThree(number) {
 console.log(`${number} is divisible by 3`)
}

function sayFive(number) {
  console.log(`${number} is divisible by 5`)
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
//module.exports = threeFive;
