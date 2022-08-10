/* Declaring a variable called count and setting it to 0. It is also declaring a variable called data
and setting it to the element with the id of count-el. */
let count = 0;
let data = document.getElementById("count-el");

/**
 * Increment() is a function that increments the count variable by 1 and then updates the data.innerHTML property to the new value of count.
 */
function increment(){
  count += 1;
  data.innerHTML = count;
}

// console.log(count);