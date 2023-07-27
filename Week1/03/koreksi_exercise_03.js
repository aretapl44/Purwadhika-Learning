// Palindrome check
let str = "kasur ini rusak".toLowerCase();
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
}

console.log(result == str ? "palindrome" : "not palindrome");

// Remove occurence of a given string
// console.log("Remove first occurance");

// let haystack = "Hello World";
// let needle = "ell";

// let result2 = "";

// for (let j = 0; j < needle.length; j++) {
//     for (let k = 0; k < haystack.length; k++) {
//         if (needle[j] === haystack[k] && 
//             needle[j+1] === haystack[k+1] && 
//             needle[j+2] === haystack[k+2]) {
//         } else {
//             result2 = result2 + haystack[k];
//         }
//     }
// }

// console.log(result2);

// Sensor
let sensor = "a";
let sentence = "saya lapar";
let result3= "";

for (let l = 0; l < sentence.length; l++) {
    if (sentence[l] === sensor) {
        result3 = result3 + "*";
    } else {
        result3 = result3 + sentence[l];
    }
}
console.log(result3);

//Sorting of three number
console.log("sorting of 3 number");

let a = 4;
let b = 7;
let c = 2;

if (a > b && a > c) {
    if (b > c){
        console.log(a, b, c);
    } else if ( c > b) {
        console.log (a, c, b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log (b, a, c);
    } else if (c > a){
        console.log (b, c, a)
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log (c, a, b);
    } else if (b > a) {
        console.log(c, b, a);
    }
}

