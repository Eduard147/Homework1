let a=10;
alert(a);
let b=20;
alert(b);
let year=2007;
alert(year);
let creator="Брендан Эйх";
alert(creator);
let x=10;
let y=2;
let addition=x+y;
alert(addition);
let subtraction=x-y;
alert(subtraction);
let multiplication=x*y;
alert(multiplication);
let division=x/y;
alert(division);
let z=2**5;
let result=z;
alert(result);
let m=9;
let n=2;
let remaibderoftheDivision=m%n;
alert(remaibderoftheDivision);

let num = 1;
num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;
alert(num);

let age=prompt('Сколько вам лет?');
alert(age);

const user = {
    name:'Эдуард',
    age:22,
    isAdmin:'true'
};
user['city of residence']='Симферополь';
user.age=23;
console.log(user['city of residence']);
delete user['city of residence'];
let info=prompt("Какую информацию хотите узнать о пользователе?");
alert (user[info]);
let name1=prompt("Как тебя зовут?");
alert(`Привет,${name1}!`);
