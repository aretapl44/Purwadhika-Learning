// Single line
// Menampilkan tulisan string dalam tanda kutip

// Menampilkan hasil penjumlahan dari dua angka
// Shortcut Comment => ctrl + /
console.log(2 + 4)

//Multiple
/*


JIka memiliki komentar yang membutuhkan lebih dari 1 baris, gunakan cara ini.

Karena akan lebih mudah dibanding harus menggunakan // pada tiap barisnya


*/


console.log ("My First Code");

//variabel : tempat menyimpan data
// Menggunakan keyword var

// Membuat variabel tanpa memberikan data untuk disimpan
var rain
// Menampulkan data yang disimpan di variabel rain
console.log(rain);

// Membuat variabel dan memberikan data untuk disimpan
var sky = "Blue"
// Menampulkan data yang disimpan di variabel sky
console.log(sky);

// Rules : Aturan dalam membuat variabel
// 1. Tidak dapat mengandung spasi

var firstname = "Max"
console.log (firstname);

// var my address = "Dutch"
// console.log(my address);

// 2. Hanya dapat diawali oleh huruf, underscore, dan dollar sign

// benar
var phonenumber
var _age
var $quality

var firtsname, middlename, lastname

// salah
// var 1heart
// var 7days
// var !warning

// 3. Hanya dapat terdiri dari huruf, angka, underscore, dan dollar sign

var totalbill, my_birthday, $cloud9

// 4. Bersifat case-sensitive (membedakan huruf kecil dan huruf besar)

var nextday = "lower case"

var Nextday = "upper case"

// Case Style

// cameCase
// Selalu di awali dengan huruf kecil
// Huruf pertama pada kedua dan seterusnya menggunakan huruf kapital

var myNumber

var ourLastNight


// snake_case
// Selalu menggunakan huruf kecil
// Setiap kata akan dihubungkan oleh underscore

var my_number

var our_last_night

// Fungsi Variabel
// Memudahkan untuk menggunakan data berulang menggunakan variabel

// console.log(23);
// console.log(23);
// console.log(23);

var thank = "23"

console.log (thank);
console.log (thank);
console.log (thank);

// Data Types

// Strings / Text
// Menggunakan kutip satu atau kutip dua

var greet = "Hello"
var morning = 'Good Morning'
var oneFour = '1234'

// Numbers / Angka

// Integer : bilangan bulat
var intOne = 123
var intTwo = 345
var intTgree = 12

// Float : bulangan desimal
var twentyThree = 0.23
var pi = 3.14
var perfect = 8.99

// Boolean
// Hanya memiliki 2 nilai true dan false

var graduate = true
var sick = false

// Object
// Menyimpan data lebih dari satu, dapat memiliki "variabel"

var name = {firstName : "Tanjirou", lastName : "Kamado"}
console.log(name);
console.log(name.firstName);
console.log(name.lastName);

// Array
// Menyimpan data lebih dari satu, setiap data akan diwakilkan oleh nomor index

var days = ["Sunday", "Monday", "Tuesday"]

console.log(days[0])
console.log(days[1])
console.log(days[2])

// Undefined dan Null
// Mewakili variabel yang tidak menyimpan nilai apapun

var undfnd
console.log(undfnd);

var nll = null
console.log(nll)

// Typeof
// Mencari tahu jenis tipe data

var lang = "Javascript"

// Tidak akan mengeluarkan nilai
typeof(lang)

// Untuk mengeluarkan output harus dipakaikan variabel di depannya
var result = typeof(lang)

console.log(result)