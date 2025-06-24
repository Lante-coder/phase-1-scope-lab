// Write your solution in this file!
// Global variables (assuming these exist based on the tests)
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'someone';

// 1. Function to modify the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 2. Function to set the global bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 3. Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 4. Function that tries to reassign a const variable (should throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will throw a TypeError
}
