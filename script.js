//Частина 1
let say = prompt("Яке буде кінцеве число циклу?")

for(let i = 0;i<say;i++){    
    alert("Ваше число " + i)
}
 alert("Кінцеве число циклу : " + say)


//  //Частина 2

     for(let i = 100;i>=0;i-=10)
     {
     alert("Число: "+ i);
     }


// //Частина 3
   const b = 50;
   let z = 0;
     for(let i = 0; i<=b;i++){
         if(i % 2 == 0){ 
              z += i 
            alert("Cума парних чисел від 0 до 50 : " + z)
         }
     }


// //Частина 4

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  n=1;
  while(n>=0 && fib(n)<=100){
  alert("Числа Фінобаччі від 0 до 100: " + fib(n));
  n++;
  } 


//Частина 5 

 let a = 2
 for(let i = 2;i<=100;i = 2*i-1){
       alert("Число: " + i);
 }

//Частина 6
let number = prompt("Введіть число: ")
let sine = prompt("Введіть степінь: ")
let result = 1
for(let i = 0;i<sine;i++){
    result *= number
}
alert("Число в степені: " + result)


