// Luas persegi panjang
let panjang = 10;
let lebar = 5;

console.log (panjang * lebar);

// Keliling persegi panjang
console.log (2 * (panjang + lebar));

// Diameter lingkaran
let jari = 7;
const PI = 3.14;

console.log(jari * 2);

// Keliling lingkaran
console.log(2 * PI * jari);

// Luas lingkaran
console.log(PI * jari * jari);

// Sudut segitiga
let sudutA = 80;
let sudutB = 65;
let sudutSegitiga = 180;

let totalDuaSudut = sudutA + sudutB;

console.log(sudutSegitiga - totalDuaSudut);

// Hari
let now = new Date();
let hariIni = now.getDate();


let kemarin = new Date ("2023-07-23");
let hariKemarin = kemarin.getDate();


console.log(hariIni - hariKemarin);

// Convert hari ke tahun
let days = 400;
let convertYear = days / 365;

let year = convertYear.toFixed();

console.log(year + " tahun");

// Convert hari ke bulan
let month = days - 365;
let convertMonth = month / 30;

let bulan = convertMonth.toFixed()

console.log(bulan + " bulan");

// Convert sisa hari
let sisaHari = days - 365 - 30;

console.log(sisaHari + " hari");