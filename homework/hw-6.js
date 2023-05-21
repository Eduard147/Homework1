//1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i])
    if (numbs[i] == 10) {
        break;
    }
}

//2
let arr = [1, 5, 4, 10, 0, 3];
let i = 0, found = false;
for (let elem of arr) {
    if (elem == 4) {
        found = true;
        break;
    }
    ++i;
}
if (!found) i = -1;

console.log(i);

//3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(` `);
console.log(numbers);

//4
let array = [];
for (let i = 0; i < 3; i++) {
    array[i] = [];
    for (let j = 0; j < 3; j++) {
        array[i][j] = 1;
    }
}
console.log(array);

//5
var arra = [1, 1, 1];
arra.push(2, 2, 2);
console.log(arra);

//6
let gree = [9, 8, 7, `a`, 6, 5];
gree = gree.sort();
console.log(gree.pop());
console.log(gree);

//7
let question = Number(prompt('Введите число от 1 до 10'));

const answer = [9, 8, 7, 6, 5];

let isPresent = answer.includes(question);

console.log(isPresent);

//8
function reverseString(string) {

    let newString = '';

    for (let i = string.length - 1; i >= 0; i--) {

        newString += string[i];

    }

    return newString;

}

console.log(reverseString('abcdef'));

//9
const arr1 = [[1, 2, 3,], [4, 5, 6]];
const merged = arr1
console.log(arr1)

//10
let arrs = [1, 3, 5, 7, 9];

let result = arrs.reduce(function (sum, current, i) {

    return

});

console.log(result);

//11
function squareArr(...arbitraryNumbers) {
    return arbitraryNumbers.map(number => number ** 2);
}

console.log(squareArr(1, 8, 6, 3, 0));

//12
let getLengthWords = (...words) => {
    return words.map(word => word.length);
}

console.log(getLengthWords('массив', '', 'стр', 'Массив - упорядоченный набор элементов', 'д'));

//13

function filterPositive(numbsNum) {

    let i = 0;

    numbsNum.push(-25, 25, 0, -1000, -2)

    if (numbsNum[i] < 0) {

        console.log(filterPositive([-1, 0, 5, -10, 56]));

    }

}



