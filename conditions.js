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

const myNumber = "threezeroone"; //? string
let myNumber2 = Number(myNumber);
console.log(myNumber2); //? NaN
console.log(typeof myNumber2); //? number

const dolar = "1000";
const tl = "2000";
const totalMoney = Number(dolar) + +tl;
console.log(totalMoney);
