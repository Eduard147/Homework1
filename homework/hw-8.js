//1
const people = [

    { name: 'Глеб', age: 29 },

    { name: 'Анна', age: 17 },

    { name: 'Олег', age: 7 },

    { name: 'Оксана', age: 47 }

];

console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
//2
function isPositive(number) {
    if (number > 0) {
        return number;
    }
}

function isMale(whoIS) {
    if (whoIS.gender == 'male') {
        return whoIS;
    }
}

function filter(arr, ruleFunction) {
    for (let i = 0; i < arr.length; i++) {
        return arr.filter(ruleFunction);

    }
}


console.log(filter([3, -4, 1, 9], isPositive));


const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));
//3
let myDate = new Date();

myDate = setInterval(() => {

    console.log(myDate);

}, 3000);



setTimeout(() => {

    clearInterval(myDate); console.log('30 секунд прошло');

}, 30000);



//4
function delayForSecond(callback) {
    setTimeout(callback, 1000); // выведет после колбэка ниже через 1 сек

}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

//5
function delayForSecondTwo(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecondTwo(() => sayHi('Глеб'));

или

delayForSecondTwo(function () {
    sayHi('Глеб')
});
