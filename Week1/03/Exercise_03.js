// Wite a coe to display the multiplication table of a given integer
// ex : number 0
/*

output :
9 x 1
9 x 2
...
9 x 10


*/

let j =  1;
while (j <= 10) {
	console.log("9 x ", j);
    j++;

}

// Write a code to check wether a string is a palindrome or not
// kata yang dibalik akan tetap dibaca sama
let kata = "Lol";
let lowerCase = kata.replace(/[^A-Z0-9]/ig, "").toLowerCase();
let palindrome = true;
let dariAwal = 0;
let dariAkhir = lowerCase.length - 1;

while (dariAwal < dariAkhir) {
    if (lowerCase[dariAwal] !== lowerCase[dariAkhir]) {
        palindrome = false;
        break;
    }
    dariAwal++;
    dariAkhir--;
}

if (palindrome) {
    console.log(`${kata} adalah kata Palindrome`)
} else {
    console.log(`${kata} bukan kata Palindrome`)
}

// Write a code to convert centimeter to kilometer
let centimeter = 1000;

let centiToKilo = centimeter / 1000;

console.log(`${centimeter} centimeter adalah ${centiToKilo} kilometer`);

// Write a code to format number as currency (IDR)
// Ex : 1000 -> "Rp. 1.000,00"
let jumlah = 99100
let formattedUang = jumlah.toLocaleString("id-ID", {style:"currency", currency:"IDR"});

console.log(formattedUang);


// Write a code to remove the first occurrence of a given "search string" from a string
// Ex : string = "Hello world", search string = "ell" -> "Ho world"

let string = "Hello world";

let searchString = string.substr(4, 9);
let searchString1 = string.substr(0,1);

console.log(searchString1+searchString);

// Write a code to capitalize the first letter of each word in a string
// Ex : "hello world" -> "Hello World"
// Kalo bisa tanpa pakai uppercase

// Write a code to reverse a string

let name = "Argus";

for (i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
}

// Write a code to swap the case of each character from string


// Write a code to find the largest of two given integers
let int1 = 10, int2 = 4;

if (int1 > int2) {
    console.log(`${int1} lebih besar dari ${int2}`)
} else {
    console.log(`${int1} lebih kecil dari ${int2}`)
}


// Write a conditional statement to short three numbers
for (let l = 1; l <= 3; l++) {
    console.log(l);
}

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for other data type
let data = "Argus";

if (typeof data === 'number') {
    console.log(2)
} else if (typeof data === 'string') {
    console.log(1)
} else {
    console.log(3)
}

// Write a code to change every letter a into * from a string of input
let words = "aku adalah Yin dan tidak akan pernah berubah apapun yang terjadi."

let gantiWords = words.replace(/a/g, "*");

console.log (gantiWords);