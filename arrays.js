// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
const array =['Tomatoes','Veges','oil','eggs','potatoes'];
const quantities=[7,30,250,90,300];
// Object.fromEntries method to transforms a list of key-value pairs into an object.
inventory = Object.fromEntries(array.map((a, b) => [a, quantities[b]]));
console.log(inventory)
// Add Key/Value Pair to an Object Using Dot Notation
inventory.mangoes=30;
console.log(inventory);
// Write a function to update the stock quantity of an existing item.
function inventory(array,quantities){
    return array,quantities
}
console.log(inventory)
// Write a function to calculate the total number of items in the inventory.
function total(){
        sum +=inventory.length
        console.log(sum);
    }
    // Write a function to find the item with the lowest stock quantity.
 function lowest(){
    Math.min(inventory)
 }
 console.log(inventory)                               

  











