//1
function min( var4, var8, var6 ) {
    if( var8 > var4 ) {
       return var4;
    } else if( var6 > var6 ) {
       return var6;
    } 
    }
    //2
    function IsOdd(numb){
        var number = numb;
        if(Math.floor(number / 2) == number / 2) {
            //Чётное
            return false;
        }else{
            //Нечётное
            return true;
        }
   }
   //3
   function number(num) {
    return num * num
  }
   
  console.log(number(20)) // => 200
 //4
let age = prompt(`Введите свой возраст`)
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
const circle1 = {

    radius: 50,

    getArea () {

        return Math.PI * this.radius * this.radius;

    }

    ,getPerimeter () {

        return 2*Math.PI * this.radius;

    }

}

console.log(circle1.getArea());

console.log(circle1.getPerimeter());