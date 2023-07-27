// Ternary Operator
// if else yang hanya satu baris


let welcome = "";
let name = "dimas";

welcome = name != "" ? "Welcome " + name : "please input your name";

console.log(welcome);

// hitung angka 1 - 10, dengan hitungnya satu-satu
// for (awalan; akhiran; langkah)

for (let i = 1; i <= 10; i = i + 1) {
	console.log("angka => ", i);
}

// While Loop
// Tidak mendefined awalan dan akhiran, tapi hanya akhiran saja
// Yang ini cek dulu
let j =  1; //awalan
while (j <= 10) { //akhiran
	console. log("j => ", j);
	j = j + 1; //step

}

// Do While
// Yang ini eksekusi dulu
let k =1;
do {
    console.log("hello => ", k);
    k = k + 1;
} while (k <= 2);
console.log (k);