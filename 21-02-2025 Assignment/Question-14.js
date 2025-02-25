// Q: 14
// Title: L1 - Student Score Manager: Handling Dynamic Adjustments

// Problem Statement: You are creating a score management system for student results. Start with an array of 10 student scores. The program should do the following:

// For any student with a score below 40, increase their score by 20. For students with scores over 90, adjust their score to a maximum of 90. Count and log how many students passed (score of 50 or more) after the adjustments. Log the final adjusted array of scores.

let scores = [35, 42, 88, 95, 78, 56, 39, 90, 29, 99];
let passedCount = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 40) {
        scores[i] += 20;
    } else if (scores[i] > 90) {
        scores[i] = 90;
    }
    if (scores[i] >= 50) {
        passedCount++;
    }
}

console.log("Final Scores:", scores);
console.log("Students Passed:", passedCount);