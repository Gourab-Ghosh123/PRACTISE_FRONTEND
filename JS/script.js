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


// DOM(Document Object Model) -- Browser converts HTML into objects that JS can access and modify---

let heading = document.getElementById("title");
console.log(heading);

let subheading = document.querySelectorAll("#title1");


subheading.innerText = "WElcome";
console.log(subheading);


let sub = document.querySelector("#title");
sub.innerText = "Welcome";
console.log(sub);

let para = document.querySelector("p");
para.style.color = "red";



// EVENT-- something happening on webpage-
//onclick stores one function , while addEventListener() can attach multiple functions to the same event without replacing previous ones .

let btn = document.querySelector("#btn");
btn.onclick = function(){
    alert("Button Clciked");
}

let btn1 = document.querySelector("#btn1");
btn.addEventListener("click" , () => {
    alert("clicked!");
});

btn1.addEventListener("click" , () =>{
    console.log("Submit Form");
});

btn1.addEventListener("click" , () =>{
    console.log("Send API");
});

// INPUT EVENTS

let input = document.querySelector("#text");
input.addEventListener("input" , () =>{
    console.log(input.value);
});

// CLASS MANIPULATION

let box = document.querySelector("#box");
box.classList.add("active");
box.classList.remove("active");
box.classList.toggle("active");



// CREATE ELEMENTS
let p = document.createElement("p");
p.innerText = "Hello";

document.body.appendChild(p);
p.remove();