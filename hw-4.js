// 1

let i = 0;
while (i < 2){
    console.log ("Привет");
    i++;
}

// 2

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

// 3

let b = 7;
while (b <= 22) {
    console.log(b);
    b++;
}

// 4

const obj = {
   'Коля' : '200 $',
    'Вася' : '300 $',
    'Петя' : '400 $',
}
for (const key in obj) {
   console.log(`${key}-зарплата-${obj[key]}`);
}

// 5

let n = 1000;
let num = 0;
while (n > 50) {
    num++;
    n /= 2;
    console.log(num);
    console.log(n);
}

// 6

for (let dayFriday = 5; dayFriday <= 31; dayFriday += 7) {
    console.log(`Сегодня пятница, ${dayFriday}-e число. Необходимо подготовить отчет.`);
}
