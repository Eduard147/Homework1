//1
const showLowestnumber = (a, b) => {
    if (a < b) {
        return (a);
        
    } else if (a===b) {
        return (b);
        
    } else{
        return (b);
    }
}
console.log(showLowestnumber(20,5));
    //2
    const number = (digit) => { 
        if (digit % 2 ==0) {
            return('even number')
            
        } else {
           return('odd number') 
        }
    }
    let digit = prompt('enter number')
    
    console.log(number(digit));
    
    let c = prompt('enter number')
   //3
   function square(c) { 
    alert(c**2);
}
console.log(square(c)); 


function square(c) { 
   return c**2
}
console.log(square(c)); 

 //4
 const askUser = ( userInfo) => { 
    
    if (userInfo < 0) {
        
        alert('Вы ввели неправильное значение')
    } 
    else if (userInfo >= 0 && userInfo <= 12) {
       
        alert('Привет, друг!')
    }
    else if(userInfo > 12){
        
        alert('Добро пожаловать!')
    }
}
//5
function check(d, c) {

    if (isNaN(d) || isNaN(c)) {

        alert('Значение не является числом');

    } else {
        return d * c;
    }
}
check('l', 9);
//6
function input(numeral) {

    let numeral= prompt ('Введите любое число');

    if (isNaN(numeral)) {

        alert ('Переданный параметр не является числом');    

    }

    else {

        alert (`${numeral} в кубе равняется ${numeral**3}`);

    }

}

input(1);
//7
function getCircleArea() {        
    return this.radius**2 * 3.14
}
   
function getCirclePerimeter() {
    return this.radius * 3.14
    
}
let circle1 = {
    radius: 10,
    
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter 
}
let circle2 = {
    radius: 5,
    
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter 
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());