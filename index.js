function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[j] === complement) 
      return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}


/* 
  Write the Big O time complexity of your function here
  5(5*n)
  If you remove the constatnts 0(n)

*/

/* 
  Add your pseudocode here
  *START
  * A function hasTargetSum that takes two inputs
  * The functionthen loops through the array
  * Create a variable and store the difference
  * Check if the remaining value is equal to the remainder
*/

/*
  Add written explanation of your solution here
  Take the array
  Using a for loop and loop through it
  Get the difference between the taarget number and values in the array
  Get the remainder and compare it to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
