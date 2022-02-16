// Task 1

let number = prompt('Введіть число')

for (let i = 0; i <= +number; i++) {
    console.log('Ваше число ' + i)
}


// Task 2

let num100 = 100
for (let i = 0; i < num100; i++) {
    num100 = num100 - 10
    console.log(num100)
}


// Task 3


let num0 = 0
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        num0 = num0 + i
        console.log(num0)
    }
}


// Task 4

let number0 = 0;
let number1 = 1;

for (let i = 0; i <= 100; i++) {
	let fibonachi = number0 + number1;
	number0 = number1;
	number1 = fibonachi;

	console.log(fibonachi);
}


// Task 5

for (let a = 2; a < 1000; a = 2*a-1) {
    console.log(a)
}

// Task 7

let chyslo = prompt('Число?') // P.S. Знаю що не можна так записувати, але не хочу повторятись зі зміннами
let pow = prompt('Степень?')

let result = chyslo

function doPow () {
    result = result * chyslo
    pow--
    if (pow > 1) {
        doPow()
    }
    return result
}
tryPow()
alert(result)