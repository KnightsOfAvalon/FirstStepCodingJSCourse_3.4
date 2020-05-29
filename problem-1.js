/** Example Problem One **/

// Suppose you have an array of string like [ “adios”, “bye”, “ciao” ].
// Your task is to write a function called total_characters that accepts such
// an array as a parameter and returns the summed number of characters across
// all the strings in the array.

/** My Answer **/

// P: Parameters = stringArray; function name = total_characters
// R: return number
// E: Example: ["you", "can", "do", "this"] => we expect "12" as result
// P: Pseudocode (see pseudocode in comments within the function)

function total_characters(stringArray) {
  // Create variable that will keep track of the sum
  var characterSum;

  // Convert the array to a smushed string
  // Get the length of the smushed string
  // Set the length of the smushed string equal to the sum
  characterSum = stringArray.join("").length;

  // return the sum (length of smushed string)
  return characterSum;
}

console.log(total_characters(["you", "can", "do", "this"]));
console.log(total_characters(["you", "did", "it"]));
