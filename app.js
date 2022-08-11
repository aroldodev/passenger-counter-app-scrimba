/* Declaring a variable called count and setting it to 0. It is also declaring a variable called data
and setting it to the element with the id of count-el. */
let count = 0;
let data = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

/**
 * Increment() is a function that increments the count variable by 1 and then updates the data.innerHTML property to the new value of count.
 */
function increment(){
  count += 1;
  data.textContent = count;
}

/**
 * The function save() is called when the save button is clicked. It creates a variable called saveData and sets it equal to the current count plus a string. It then adds the saveData variable to the saveEl element. It then sets the count variable to 0 and updates the data element to reflect the new count
 */
function save() {
  let saveData = count + " - ";
  saveEl.textContent += saveData;
  count = 0;
  data.textContent = count;
}

