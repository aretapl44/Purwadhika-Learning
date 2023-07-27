let arr = [];
let books = [
    "Harry potter", 
    "Eragon", 
    "UNWIND"
];

const colors = ["red", "green", "yellow"];

console.log(books);

let cars = new Array("BMW", "Volkswagen", "Toyota");

console.log(cars);

console.log(books[2]);

books.push("Kriptografi - Janner Simamarta");

console.log(books);

books[3] = "Kriptografi - Janner Simamarta, Sriadi";
books[books.length - 1] = "Demi Masa - Malik al mughis"; //ini push

console.log(books);

colors[2] = "blue";

console.log(colors);

// colors = []; // mendefinisikan ulang

// console.log(colors);

//Built in
let a = ["a", "b", "b", "b", "d"];
console.log(a.toString());

let numbers = [4, 2, 1, 5, 10, 8];

console.log(numbers.sort((a, b) => a - b ));

let strings = "sudah makan pulang";
console.log(strings.split(" "));

// sering di pakai di react untuk front end
const res = a.map((i) => {
    return i + 2;
}); //dari array ke array, ditambah sesuatu yang berbeda

a.forEach((element) => {
    console.log(element);
});

console.log(res);

const resFind = a.find((e) => {
    return e === "b";
}); //ketemu satu berhenti

console.log(resFind);

const resFindIndex = a.findIndex((e) => {
    return e === "b";
}); //munculkan index ke berapa

const resFilter = a.filter((e) =>{
    return e === "b";
}); //dari array ke array, cuma beberapa, ga bisa berubah

console.log(resFind, resFindIndex);

console.log(resFilter);

//For of untuk array
let z = ["a", "b", "b", "b", "d"];

for (let zi of z) {
    console.log(zi);
}

// fuction declaration
function add (x,y) {
    return x + y;
}

// n parameter
function hello(n) {
    for(let i = 1; i <= n; i++)
    console.log("hello");
}

// bisa tanpa param
function helloWorld () {
    console.log("hello world");
    console.log("halo");
}

console.log(add(1, 2));

//n nya diganti jadi 3
hello(3);

console.log("===========");

hello(5);

helloWorld();

// expression
let sayName = function(name){
    console.log("Hello", name);
}

sayName("Dimas");

//scope
// kuis module
let age = 16;

function greeting() {
    const hello = "hello";
    console.log(hello);
    age = 32;
    return "hello";
}
console.log(age); // 16 karena greetingnya belum terpanggil
greeting();
console.log(age); // 32 karena greetingnya kepanggil sebelum console.log

function myFunc (a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest.toString());
}

myFunc("satu", "dua", "tiga", "empat", "lima");

function greet(){
    function welcome() {
        var name = "Argus"
        return "Welcome " + name;
    }
    function halo (){
        return "hello";
    }
    return welcome() + " and " + halo();
}

console.log(greet());

//currying
function multiplayer(factor) {
    // return number * factor;
    return function (number) {
       return number * factor;
    };
}

console.log(multiplayer(5)(3));

//Rekursif
// Akademik purpose, interview
function hayya(m) {
    console.log("m => ", m, "Hayya");
    if(m > 1) {
        hayya(m - 1); //agar tidak infinte, jadi 4
    }
    // hayya();
    // jadi infinite, namanya rekursif, ada cara agar berhenti
    // base case, kondisi di mana dia berhenti
}

hayya(5);

//Arrow function
// tidak perlu kurng kurawal
// kalau pakai kurung kurawal harus tetep pakai return
// tidak ada nilai this
const multiply = (x, y) => x * y;

const multiply2 = function(x, y) {
    return x * y;
}

console.log(multiply(6, 7));
console.log(multiply2(6, 3));

//isNaN
//untuk validasi
console.log(isNaN(5 * "a"));
console.log(isNaN(5 * 5));