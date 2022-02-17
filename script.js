// part1
// const number = prompt("Enter your number,please")

// for (let i = 0; i <= number; i++) {
//     alert("Your number is " + number)
// }

//  part2

// for (let i = 100; i >= 0; i -= 10) {
//     console.log("number ", i);
// }

// part3
// let sum = 0
// for (let i = 0; i <= 50; i += 2) {
//     sum += i
// }
// console.log("sum: ", sum);

// part4

// let number1 = 0
// let number2 = 1

// for (let i = 0; <= 100; i++) {
//     let current = number1 + number2

//     number1 = number2;
//     number2 = current;

//     console.log(current);
// }

// part5

// for (let i = 2; i <= 1000; i = 2 * i - 1) {
//     alert(`number ${i}`)
// }

//part6

let number = prompt(`Please, write number)`)
let degree = prompt(`Please, write degree)`)
let result = 1
    // const result = Math.pow(number, degree);
    // alert(result);

for (let i = 0; i < degree; i++) {
    result *= number
}

alert(`your degree: ${result}`)