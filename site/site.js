const showSeasons = () => {
    
    let month = +prompt('Please enter number of the month')
   
    if (month === 12||month === 1 || month === 2){
        alert ('Welcome to the Winter')

    } 
    else if (month === 3 || month === 4 || month === 5){
        alert('Welcome to the Spring')
    }
    else if (month === 6 || month === 7 || month === 8){
        alert('Welcome to the Summer')
    }
    else if (month === 9 || month === 10 || month === 11){
        alert('Welcome to the Autumn')
    }
    else if (isNaN(month)|| month > 12) {
        console.log('Season does not exist')
    }
    
}

function memoryWords() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let answer = prompt(`Чему равнялся первый элемент массива?`);
    let answer2 = prompt(`Чему равнялся последний элемент массива?`);
    if (answer == memoryWords[0] && answer2 == memoryWords[6]) {
        alert(`Поздравляем, ты все угадал!`);
    } else if(answer == memoryWords[0] || answer2 == memoryWords[6]) {
        alert(`Вы были близки к победе!`);
    }
    else {
        alert(`Все ответы были неверные`);
    }
}