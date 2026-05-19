let user = {
    name : 'Gourab',
    age : 21,
    passing_year :2027
};
let key = 'age';

console.log(user.name);
console.log(user["key"]);
user.age = 22;
user.country = "INDIA";
delete user.country;
console.log(user);

// METHODS-- function inside object

let car = {
    brand : "BMW",
    color :() =>{
        console.log('black');
    },
};

console.log()

// NESTED OBJECT...

let student = {
    name : "Gourab",

     address : {
        city : 'Asansol',
        state : 'West Bengal'
    }
};

console.log(student.address.city);


// ARRAY OF OBJECTS....

let snacks = [
    {
        chocolate : "Dairy Milk",
        price : 20
    },

    {
        ice_cream : "Amul",
        price : 20
    }
];

console.log(snacks[0].price);
console.log(snacks[1]);


// Map --always returns a new array , original array is untouched...
let numbers = [1 , 2 , 3];

let double = numbers.map((num) =>{
    return num * 2;
});
console.log(double);
console.log(numbers);

//FILTER -- Keeps only the elements that passes the condition...

let values = [1 , 2 , 3 , 4 , 5];

let even = values.filter((num) =>{
    return num % 2 === 0;
});
console.log(even);
console.log(values);

//FIND() -- returns the first matching value...
let username = [
    {
        student : 'Gourab'
    },
    {
        student : 'Anu'
    }
];

let name = username.find((student) =>{
    return username.student === 'Anu';
});

console.log(name);

//Async Function...
console.log("start");
setTimeout(() => {console.log("Hii")} , 3000);
console.log("end");




// Mini-Project for Async/Await....

let btn = document.getElementById("btn");

btn.addEventListener("click" , async() =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await response.json();

    console.log(data);
})