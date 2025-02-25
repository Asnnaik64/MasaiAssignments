// Q: 13
// Title: L1 - Task Rescheduling System: Managing Priorities Dynamically

// Problem Statement: You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks. Implement the following operations without using specific method references:

//   Remove the first task from the list.Add two new high - priority tasks to the beginning of the list.Replace the last task in the list with a new task.Log the updated task list after all operations.


let tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];
tasks.shift();
tasks.unshift("HighPriority1", "HighPriority2");
tasks[tasks.length - 1] = "NewTask";
console.log(tasks);