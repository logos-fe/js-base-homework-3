// Частина 1
// Запитувати у користувача число, яке буде кінцевою точкою циклу(умовою)
// Створити цикл, який буде виводити в консоль "Your number is" і число даної ітерації

let number = prompt('Enter your number', '');

for (let i = 0; i <= number; i++) {
    console.log(`your number is ${number}, i=${i}`)
}


// Частина 2
// Створити цикл, який буде виводити в консоль усі числа від 100 до 0, з кроком 10

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

/*Частина 3
Створити цикл, який буде обраховувати суму усіх парних чисел від 0 до 50, виводити тільки кінцевий результат */

let sum = 0;
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0 ) {
        sum += i;
    }
}

console.log(sum);

/*Частина 4
Створити цикл, який буде виводити усі числа Фібоначчі(0 1 1 2 3 5 8 13 ...), які знаходяться в межі від 0 до 100*/

let one = -1;
let two = 1;

for (let i = 0; i <= 100; i++) {
	
    let total = one + two;
    one = two;
    two = total;
	
    if (total >= 100 ) {
        break;
    }

	console.log(total);
}

/*  Частина 5
Створити цикли, який буде виводити на екран всі числа в послідовності (крок зміни лічильника) 2a-1, де початкове значення a = 2, та які менше 1000  */


for (let i = 2; i < 1000; i = 2*i - 1) {
    console.log(i);
}


/*  Частина 7
Запитати в користувача число
Запитати в користувача степінь
Створити цикл, який буде підносити число до степеня (!Цикл повинен бути тільки один)
Степінь може бути 0, може бути від`ємним, це потрібно врахувати, обрахувати всі можливі варіанти  */

let integer = prompt('Enter your number', '');
let exp = prompt('Raise your number to the power of:', '')

let expValue;
if (exp > 0) {
    expValue = exp;
} else {
    expValue = -exp;
}

let result = 1;

for (let i = 0; i < expValue; i++) {
    result *= integer;
}

if (exp < 0) {
    result = 1 / result;
}

if (exp == 0) {
    result = 1;
}

console.log(result);