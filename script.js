// Basic code with predefined numbers to calculate the average

// Assign a predefined list of numbers
let numArray = [40, 60, 10, 20, 80];

// Calculate the sum using a basic loop
let sum = 0;
for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
}
// Instead of calculating sum manually, replace it with a reducer function

// Calculate the average
let average = sum / numArray.length;

// Print the average
console.log(`The average is: ${average}`);