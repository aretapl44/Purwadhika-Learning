// Convert Celcius ke Fahrenheit
// F = (9/5 x °C) + 32
let celcius = 100;
let result = ((9 / 5) * 100) + 32;
  console.log(result);


// Check number ganjil dan genap
let nomor = 7;

if (nomor % 2 === 0) {
  console.log(`Nomor ${nomor} adalah genap.`);
} else {
  console.log(`Nomor ${nomor} adalah ganjil.`);
}

// Check nomor prima
let num = 5;

result = num % 2 ? "Bilangan prima" : "Bukan Bilangan Prima";

console.log(result);

// koreksi sum number to n
let n = 5;
let total = 0; // untuk menyimpan nilai setelah di eksekusi
for(var j = 1; j <= n; j = j + 1) {
  total = total + j; //0 nilai awal + 1 nilai j awal
  console.log("total : ", total, "saat j = ", j);
}
console.log ("total terakhir", total);

// Sum number to N
let n1 = 1, n2 = 2, n3 = 3, n4 = 4, n5 = 5;
let sum = n1 + n2 + n3 + n4 + n5;

console.log(sum);

// koreksi faktorial
/* 

!5 = 5 * 4 * 3 * 2 * 1

start dari n
end to 1
step decreasing 1 ( -1 )

*/

let num2 = 5;
let koreksiFaktorial = 1;
for(let k = num2; k >= 1; k = k - 1) {
  koreksiFaktorial = koreksiFaktorial * k;
}
console.log(koreksiFaktorial);

// Factorial number
const numFactorial = 5;

let factorial = 1;
for (let i = 1; i <= numFactorial; i++) {
  factorial *= i;
}

console.log(`Factorial dari ${numFactorial} adalah: ${factorial}`);

//koreksi fibonacci
let num3 = 10;
let firstNum = 0;
let secondNum = 1;
let lastNum = 0;

for (let h = 3; h <= num3; h = h + 1) {
  lastNum = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = lastNum;
}
console.log(lastNum);

// Print nomor pertama fibonacci
let a = 0;
let b = 1;

console.log("10 nomor pertama Fibonacci : ");

console.log(a);
console.log(b);

for (let l = 2; l < 10; l++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}