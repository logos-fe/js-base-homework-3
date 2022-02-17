// 1
let mess = prompt('Your number?');

for (let index = 0; index < mess; index++) {
  console.log('Index is: ', index);
}

// 2
for (let index = 100; index > 0; index -= 10) {
  console.log('Number', index);
}

// 3
for (let index = 2; index < 50; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

// 4
let numOne = 0;
let numTwo = 1;
let result = 0;

for (let index = 0; index < 100; index++) {
  result = numOne + numTwo;
  numOne = numTwo;
  numTwo = result;

  console.log(result);
}

// 5
for (let i = 2; i <= 1000; i = 2 * i - 1) {
  console.log('number: ', i);
}

// 7
let result = 1;
let messageNum = prompt('Your number');
let messagePower = prompt('Your power?');

for (let i = 0; i < messagePower; i++) {
  result *= messageNum;
}

console.log(result);
