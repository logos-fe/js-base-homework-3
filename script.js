// task-1
let number = prompt("Enter your number")
for (i = 0; i <= number; i++) {
    console.log("Your number is " + i);
}

// task-2
for (let i = 100; i >= 0; i = i - 10) {
    console.log(i)
}

// task-3
let sum = 0
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        sum += i
    }
    console.log(sum)
}

// task-4
let a = -1
let b = 1
for (i = 0; i <= 100; i++) {
    let c = a + b
    a = b
    b = c
    if (c >= 100) {
        break;
    }
    console.log(c)
}

// task-5
for (i = 2; i < 1000; i = 2 * i - 1){
    console.log(i)
}

// task-7
let x = prompt ("Which number")
let y = prompt ("Which degree")
let y2 = y
if (y == 0){
    y2 = 1
}
else if (y < 0){
    y2 = 1 / y
}
let z 
for (i = 0; i < 1; i++){
    z = x ** y
    console.log(z)
}