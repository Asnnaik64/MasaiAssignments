// Q: 13
// Title: L1 - Product Price Category Based on Multiple Conditions

// Problem Statement: Write a program that classifies a product into different price categories based on its price:

// If the price is greater than or equal to 1000, classify it as "Expensive".
// If the price is between 500 and 999 (inclusive), classify it as "Moderate".
// If the price is less than 500 but greater than 0, classify it as "Affordable".
// If the price is 0, classify it as "Free".
// If the price is negative, classify it as "Invalid Price".
// You must use chained ternary operators to solve this problem.

// Example:

// let price = 750;

// Output: "Moderate"

// let price = 0;

// Output: "Free"



let price = 750;
let category = price >= 1000 ? "Expensive" :
              price >= 500 ? "Moderate" :
              price > 0 ? "Affordable" :
              price === 0 ? "Free" : "Invalid Price";
console.log(category);

price = 0;
category = price >= 1000 ? "Expensive" :
           price >= 500 ? "Moderate" :
           price > 0 ? "Affordable" :
           price === 0 ? "Free" : "Invalid Price";
console.log(category);