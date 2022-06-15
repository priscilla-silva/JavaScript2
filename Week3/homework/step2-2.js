'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

  function range(start, end) {
    let numbers = [];
    for (let i = 10; i <= 15; i++) {
        numbers.push(i);
    }
    return numbers;
}
  //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
  
  console.log(range())
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
//module.exports = threeFive;
