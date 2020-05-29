/** Example Problem Three **/

// We’ll pass you an array of two numbers. Return the sum of those two
// numbers, and all numbers between them. The lowest number will not
// always come first.

/** My Answer **/

// P: Parameters = twoNumArray; function name: addNumLine
// R: return number
// E: Example: [10, 5] and [5, 10] => we expect a total of 45 for both
// P: Pseudocode (see pseudocode in comments within the function)

function addNumLine(twoNumArray) {
  // Create a variable that will represent the lowest number
  var lowNum = 0;

  // Create a variable that will represent the highest number
  var highNum = 0;

  // Create a variable that will hold the sum of numbers
  var sum = 0;

  // Use an if/else statement that will set the lowest number in the array
  // equal to the low number variable and the highest number in the array
  // equal to the high number variable.
  if (twoNumArray[0] < twoNumArray[1]) {
    lowNum = twoNumArray[0];
    highNum = twoNumArray[1];
  } else if (twoNumArray[0] > twoNumArray[1]) {
    lowNum = twoNumArray[1];
    highNum = twoNumArray[0];
  }

  // Create a loop that counts from the lowest number to the highest number.
  // During each iteration, add the current count to the sum of numbers.
  for (i = lowNum; i <= highNum; i++) {
    sum = sum + i;
  }

  // Return the sum of numbers.
  return sum;
}

console.log(addNumLine([5, 10]));
console.log(addNumLine([10, 5]));
console.log(addNumLine([-3, 2]));
console.log(addNumLine([2, -3]));
console.log(addNumLine([-436, 1000]));
