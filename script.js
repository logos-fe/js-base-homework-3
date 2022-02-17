// **Частина 1**
// 1. Запитувати у користувача число, яке буде кінцевою точкою циклу(умовою)
// 2. Створити цикл, який буде виводити в консоль "Your number is" і число даної ітерації

let userNum = prompt('Enter your num')
let strToNum = Number(userNum)
for (let i = 0; i <= strToNum; i++) {
    console.log('Your number is ' + i)
}


// **Частина 2** <br>
// Створити цикл, який буде виводити в консоль усі числа від 100 до 0, з кроком 10


for(let i = 100; i >= 0; i -= 10) {
    console.log(i)
}


// **Частина 3** <br>
// Створити цикл, який буде обраховувати суму усіх парних чисел від 0 до 50, виводити тільки кінцевий результат


let evenNum = 0
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        evenNum = evenNum + i
    }
}
console.log(evenNum)


// **Частина 4** <br>
// Створити цикл, який буде виводити усі числа Фібоначчі(0 1 1 2 3 5 8 13 ...), які знаходяться в межі від 0 до 100

let one = 0;
let two = 1;

for (let i = 0; i <= 100; i++) {
	let current = one + two;
	one = two;
	two = current;
	
	console.log(current);
}


// // **Частина 5** <br>
// // Створити цикли, який буде виводити на екран всі числа в послідовності (крок зміни лічильника) 2a-1, де початкове значення a = 2, та які менше 1000

for (let i = 2; i < 1000; i = 2*i-1) {
    console.log(i)
}


// 6 вже було? частина 4**
// **Частина 6** <br>
// Створити цикл, який буде виводити усі числа Фібоначчі(0 1 1 2 3 5 8 13 ...), які знаходяться в межі від 0 до 100

// **Частина 7**
// 1. Запитати в користувача число
// 2. Запитати в користувача степінь
// 3. Створити цикл, який буде підносити число до степеня (!Цикл повинен бути тільки один)
// 4. Степінь може бути 0, може бути від`ємним, це потрібно врахувати, обрахувати всі можливі варіанти

let number = prompt('Число?')
let pow1 = prompt('Степень?')
let result3 = 0
if (pow1 >= 0) {
    result3 = number
} else {
    result3 = 1/number
}
if (pow1 != 0) {
    for (let index = 1; index < Math.abs(pow1); index++) {
        if (pow1 > 0) {
            result3 = result3 * number
        } else if (pow1 < 0) {
            result3 = result3 / number
        } 
    }
} else if (pow1 == 0) {
    result3 = 1
}
alert('result1: ' + result3)

//////////////////////////////////////////////////////////

let num1 = prompt('Число?')
let pow2 = prompt('Степень?')
let rezult2 = 0
let i = 1
if (pow2 < 0) {
    rezult2 = 1/num1
} else {
    rezult2 = num1
} 
if (pow2 == 0) {
    rezult2 = 1
}
while (i < Math.abs(pow2)) {
    if (pow2 > 0) {
        rezult2 = rezult2*num1
    } else {
        rezult2 = rezult2/num1
    }
    i++
}
alert('result2: ' + rezult2)

////////////////////////////////////////
// let num2 = prompt('Num?')
// let pow3 = prompt('Pow')

// let rezult1 = num2

// function tryPow () {
//     rezult1 = rezult1 * num2
//     pow3--
//     if (pow3 > 1) {
//         tryPow()
//     }
//     return rezult1
// }
// tryPow()
// alert(rezult1)