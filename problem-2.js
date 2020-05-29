/** Example Problem Two **/

// Write a function to flip a coin n times that returns the numbers
// of times a “heads” was flipped.

/** My Answer **/

// P: Parameters = numOfFlips; function name = countHeads
// R: return number
// E: Example: 12 => we expect a number equal to the number of times
// heads is flipped out of 12 coin flips
// P: Pseudocode (see pseudocode in comments within the function)

function countHeads(numOfFlips) {
  // Create a variable that will hold a count of heads.
  var numOfHeads = 0;

  // Create a loop that will "flip a coin" numOfFlips times. The coin flip
  // will be represented by randomly generating either a 0 or a 1. 0 will
  // represent tails and 1 will represent heads, since we care about the number
  // of heads.
  // After the coin flip, use an if/else statement that will increment the count
  // of heads only if the result was 1 (heads).
  for (i = 1; i <= numOfFlips; i++) {
    var flipResult = Math.floor(Math.random() * 2);
    if (flipResult === 1) {
      numOfHeads++;
    }
  }

  // Return the count of heads
  return numOfHeads;
}

console.log(countHeads(12));
console.log(countHeads(12));
console.log(countHeads(12));
console.log(countHeads(12));
