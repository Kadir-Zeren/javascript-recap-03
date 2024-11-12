// * ==========
// *  KARAR YAPILARI
// * ==========

console.log(" ****** CONDITIONS ******* ");

// let sayi = +prompt("Bir sayi girinz:")); //? 100
// console.log(typeof sayi);
// let sayi2 = 10;
// sayi = sayi + sayi2; //? concational

// console.log(++sayi);

console.log(Number("123")); //? 123
console.log(Number("12.3")); //? 12.3
console.log(Number("0")); //? 0
console.log(Number(" ")); //? 0
console.log(Number("")); //? 0
console.log(Number(null)); //? 0
console.log(Number(undefined)); //? NaN

const myNumber = "threezeroone"; //? string
let myNumber2 = Number(myNumber);
console.log(myNumber2); //? NaN
console.log(typeof myNumber2); //? number

const dolar = "1000.3";
const tl = "2000.2";
const totalMoney = Number(dolar) + +tl;
console.log(totalMoney);

//* Alternatif olarak parseInt() ve parseFloat() da kullanılabilir.
const dolarInt = parseInt(dolar); //? tamsayıya cevirir
console.log(dolarInt);
const tlFloat = parseFloat(tl); //? virgüllü sayıya çevirir
console.log(tlFloat);

console.log(parseFloat(null));
console.log(parseFloat("")); //? NaN

//? String
const myNumber3 = 2000.5;
console.log(String(myNumber3));

// const calismaSuresi = prompt("Calisma süresi:");
// let maas = prompt("Maasini giriniz:");

//? 2 kosullu
// if (calismaSuresi >= 10) {
// //   maas = Math.trunc(maas * 1.1);
//   maas = Math.round(maas * 1.1);
//   console.log("Zamli maasiniz:", maas);
//   console.log(`Zamli maasiniz: ${maas}`);
// } else {
//   console.log("Uzgunuz maasinaza zam yapamayirouz", maas);
// }

// console.log("Güle güle");

//? Tek kosullu
// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log(`Zamli maasiniz: ${maas}`);
// }
// console.log("Güle güle");

//? Cok kosullu
// const grade = prompt("Please enter your grade:");

let result = null;
// let result = "";
// if (grade < 0) {
//   console.log("Grade can not be small than zero");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("Grade can not be bigger than 100");
// }

if (result != null) {
  console.log(`Your score: ${result}`);
}

//? Kısa yol
if (result) {
  console.log(`Your score: ${result}`);
}

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdıriniz .!

// const n1 = +prompt("Num1:");
// const n2 = +prompt("Num2:");
// const n3 = +prompt("Num3:");

//? nested if
// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log("Biggest:", n1);
//   }
// }

//? kosullarin logical operatorler yardimiyla birleştirilmesi
// if (n1 >= n2 && n1 >= n3) {
//   console.log("Biggest:", n1);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log("Biggest:", n2);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log("Biggest:", n3);
// }

//* 2.YONTEM
// let biggest = n1;
// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
//   biggest = n3;
// }
// console.log(`${biggest} is biggest`);

// **************** TERNARY *******************

const grade1 = prompt("Please enter your grade:");

// grade1 >= 50 ? console.log("SUCCEED") : console.log("FAILED");
// const score = grade1 >= 50 ? "PASSED" : "FAILED";
// console.log(score);

//? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanılmak zorundadir.
const score1 = grade1 >= 50 ? "SUCCEED" : "";
console.log(score1);

//? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, 2 durum var ise
//? Ternary kullanmak daha mantiklidir
const speed = 110;

speed > 120
  ? console.log("Speedy")
  : speed >= 90
  ? console.log("Normal")
  : console.log("Low Speed");
