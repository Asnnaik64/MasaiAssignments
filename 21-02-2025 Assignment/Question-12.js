// Q: 12
// Title: L0 - Managing a To-Do List: Adding and Removing Tasks

// Problem Statement: Create an array that represents your daily to -do list with 5 tasks.Add a new task to the beginning of the list.Then, remove the last task from the list.Finally, log the updated to -do list to the console

let tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];
tasks.unshift("New Task");
tasks.pop();
console.log(tasks);