
//regular function 
// function createUsdToAud(usdvalue){
//     let aud = usdvalue * 1.5
//     return aud;
// }

// arrow function

let createUsdToAud  = (usdvalue) => {
    return usdvalue * 1.5;
}



const usd =  [1000,500,200];

console.log(createUsdToAud(usd[0]));
console.log(createUsdToAud(usd[1]));
console.log(createUsdToAud(usd[2]));




























// function greetMessage(names, time) {
//     console.log(`hello at ${time} at magandang araw sayo ${names} kupal ka ba`);
// }
// function greetMessages(names, time, age) {
//     console.log(`hello at ${time} at magandang araw sayo ${names} kupal ka ba ${age} taon ka`);
// }
// function add(num1, num2) {
//     console.log(`and sagot sa ${num1} at ${num2} ay ` + (num1 + num2));
// }
// function printword(word) {
//     for (let i = 0; i < word.length; i++) {

//     }

// }
// function main() {
//     return 10
// }

// //print number 1 to 15
// //print if divisible by 5
// //print if odd or even
// function printToFIfteen(x) {
//     for (x; x <= 15; x++) {
//         if (x % 5 == 0) {
//             console.log(x + " is divisible by 5");
//         }
//         else if (x % 2 == 0) {
//             console.log(x + " is even");
//         }

//         else {
//             console.log(x + " is odd");
//         }

//     }

// }
// let x = 1
// greetMessage("Sherwin", "Magandang araw");
// greetMessages("Nicxandra Mae Roleda", "Magandang araw sayo ex", 21)
// add(1, 3);
// printToFIfteen(x);

// let word = "Welcome back guys";
// printword(word);
// console.log(main());
