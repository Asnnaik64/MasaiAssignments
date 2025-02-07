// Q: 3
// Title: L1 - Dynamic User Role Message with Object Properties

// Problem Statement: Write a program that dynamically generates a message for different user roles stored in an object. The object contains a user’s name, role, and active status. Based on the role and active status, print the following messages:

// If the user is "admin" and is active, print "Admin Access Granted!".

// If the user is "admin" and is not active, print "Admin Access Revoked".

// If the user is "user" and is active, print "User Access Granted!".

// If the user is "user" and is not active, print "User Access Revoked".

// For any other role, print "Access Denied".

// Use the ternary operator to handle this logic.

// Example:

// let user = { name: "Alice", role: "admin", active: false };

// Output: "Admin Access Revoked"

// let user = { name: "Bob", role: "user", active: true };

// Output: "User Access Granted!"


// Solution:

let user = { name: "Alice", role: "admin", active: false };
let message = user.role === "admin" ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") :
              user.role === "user" ? (user.active ? "User Access Granted!" : "User Access Revoked") : "Access Denied";
console.log(message);

user = { name: "Bob", role: "user", active: true };
message = user.role === "admin" ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") :
          user.role === "user" ? (user.active ? "User Access Granted!" : "User Access Revoked") : "Access Denied";
console.log(message);