#!/usr/bin/env node
const readline = require('readline');

// crateInterface: 사용자와 컴퓨터가 소통하는 창구
const rl = readline.createInterface({
   input: process.stdin,
    output: process.stdout,
});
// 콘솔창 깔끔하게
console.clear();
const answerCallback = (answer) => {
    if (answer === 'y') {
        console.log('nice');
        rl.close();
    } else if (answer === 'n') {
        console.log('sorry');
        rl.close();
    } else {
        console.clear();
        console.log('only accept y or n');
        rl.question('Are you ok? (y/n)', answerCallback);
    }
};
rl.question('Are you ok? (y/n)', answerCallback);
