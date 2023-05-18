//1
console.log('js'.toUpperCase());
//2
function getStrArray(array, fValue) {

    return array.filter((word) => word.toLowerCase().startsWith(fValue.toLowerCase()));




}

console.log(getStrArray(["Кошка", "Кит", "Комар", "Носорог"], "ко"));

console.log(getStrArray(["яблоко", "груша", "гриб", "огурец"], "гру"));

console.log(getStrArray(["Дом", "Банк", "Больница", "Театр"], "Кино"));
3//
console.log(Math.floor(32.58884))
console.log(Math.ceil(32.58884))
console.log(Math.round(32.58884))

//4
let arr = [52, 53, 49, 77, 21, 32];
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
console.log(max)
console.log(min)

//5
function getRandomIntFromOneToTen() {
    return Math.round(Math.random() * 9) + 1
}
console.log(getRandomIntFromOneToTen());

//6
function getRandomArrNumbers(num) {

    const arr = [];

    arr.length = Math.floor(num / 2);

    return arr.map((it) => (Math.round(Math.random() * num)));

}

console.log(getRandomArrNumbers(7));

console.log(getRandomArrNumbers(12));

//7
function getRandomInt(minValue, maxValue) {

    return Math.round(Math.random() * (maxValue - minValue)) + minValue
}
console.log(getRandomInt(20, 100));

//8
const currentDate = new Date()

currentDate.toLocaleDateString('ru-RU', { weekday: 'long' })
console.log(currentDate)



//10

let todayDate = new Date();
console.log(todayDate.toLocaleString("ru", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), todayDate.toLocaleTimeString('ru-RU'));


