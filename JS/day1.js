/* ---ODD EVEN---
let number = prompt("Enter a number:");
if(number % 2 == 0){
    console.log(`Even Number : ${number}`);
}
else{
    console.log(`Odd number : ${number}`)
}


//GRADE CALCULATOR...

let marks = prompt("Enter  your marks : ");

if(marks >= 80 && marks <= 90 ){
    console.log("Grade A");
}
else if(marks >= 70 && marks <= 80){
    console.log("Grade B");
}
else if(marks >= 60 && marks <= 70){
    console.log("Grade C");
}
else{
    console.log("FAil")
}
    
*/


for(let i = 10 ; i >= 0 ; i-- ) {
    console.log(i);
}
let sum = 0;
for(let i = 1 ; i <= 100 ; i++){
    sum += i;
}
console.log(sum);

let fruits = ["mango" , "banana" , "apple"];
for(let fruit of fruits){
    console.log(fruit)
}


function greeting(name){
    console.log(`Hello ${name}`);
}

greeting('Gourab');



let numbers = [2 , 10 , 1 , 6 , 9 ];
let maxVal = numbers[0];

for(let i = 1 ; i <= numbers.length ; i++){
    if(numbers[i] >= maxVal){
        maxVal = numbers[i];
    }
}
console.log(maxVal);

let call = prompt("Choose 1 :sum , 2 : minus , 3 : mul , 4 : division");

function sum(a , b){
    return a+b;
}
function sub(a , b){
    return a-b;
}
function mul(a , b){
    return a*b;
}
function division(a , b){
    return a/b;
}

if(call == 'sum'){
let result = sum(2,3);
console.log(result);
}

if(call == 'sub'){
let result = sub(2,3);
console.log(result);
}

if(call == 'mul'){
let result = mul(2,3);
console.log(result);
}

if(call == 'division'){
let result = division(2,3);
console.log(result);
}