function solve(num1, num2) {
    'use strict';

    let message = '';
    let sum = 0;

    for(let i = num1; i <= num2; i++) {
        sum += i;
        message += `${i} `;
    }

    console.log(message.trimEnd());
    console.log(`Sum: ${sum}`);
}

solve(4,6)