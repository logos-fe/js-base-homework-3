// Task 1
let a = prompt('Insert the number')
for (i = 1; i <= a; i++) {
    console.log('Your number is ' + i)
}

// Task 2

let b = 100 
for (let i = b; i>=0; i=i-10){
console.log (i)}

// Task 3

let c = 0
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        c += i
        }
}               
console.log(c)

// Task 4

let n1 = 0
let n2 = 1
for (let i = 1; i <= 20; i++) {
	let result = n1 + n2
	n1=n2
	n2 = result
	console.log(result)
}

// Task 5

for (let i = 2; i < 1000; i = 2*i-1) {
    console.log(i)
}


// Task 6

// let n1 = 0
// let n2 = 1
// for (let i = 1; i <= 20; i++) {
// 	let result = n1 + n2
// 	n1=n2
// 	n2 = result
// 	console.log(result)
// }


let d = prompt('Яке число підносим до степені?');
let e = prompt('До якої степені?');
let result = 1;
if (e === 0) {
    console.log('1')
} else if (e > 0) {
    for (let i = 1; i <= e; i++) {
        result *= d;
    }
    console.log(result);
} else {
    for (let i = 0; i > e; i--) {
        result *= d;
    }
    console.log(1/result);
}

