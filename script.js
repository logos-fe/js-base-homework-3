let num = prompt("What is your number?")
for( let number = 0 ; number <= num ; number++ ){
    console.log("Your number is - ", number)
}




for(i = 0;i <= 100; i += 10 ){
    console.log("i: ", i)
}




let sum = 50
for(let i = 0; i <50; i++){
    if(i % 2 === 0){
        sum += i
    }
}
console.log("sum: ", sum)




let a = 0
    b = 1
for(let i = 0;i <= 100; i++){
    let c = a + b
    a = b
    b = c
    console.log(c)
}




for (let a = 2; a < 1000; a = (2*a)-1) {
    console.log(a)
}


let number = prompt("What is your number?")
let power = prompt("What is your power?")
for(let i = 1;i <= 1;i = i + 1){
    if(power < 0){
        number = number / -power 
        console.log("When negative: ", number)
        break
    }
    number  = number**power
    console.log("When positive: ", number)
}