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

const calismaSuresi = prompt("Calisma süresi:");
let maas = prompt("Maasini giriniz:");

if (calismaSuresi >= 10) {
  maas = maas * 1.1;
  console.log("Zamli maasiniz:", maas);
  console.log(`Zamli maasiniz: ${maas}`);
} else {
  console.log("Uzgunuz maasinaza zam yapamayirouz", maas);
}

console.log("Güle güle");
