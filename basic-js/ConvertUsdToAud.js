// currenncy converter exercise
// turn each elemenet in array from usd to aud 
// AUD * 1.5 = USD
let usd = [10, 20, 30, 40]
let usd2 = [150, 225, 35]
let age = [18, 21, 32, 12, 32, 21, 16, 21]
let adult = []
let minor = []
let audDollar = []

let audConvertion = usd.map((convert) => `${convert * 1.5} aud`)
let audConvertion2 = usd2.map((convert) => `${convert * 1.5} aud`)

// let adultAge = age.map((adultAge) => {
//     if (adultAge >= 18) {
//         adult.push(adultAge)
//         return `${adultAge} is an adult! welcome`
//     } else {
//         minor.push(adultAge)
//         return `${adultAge} is a minor Sorry!`
//     }

// })

for (let i = 0; i <= usd.length - 1; ++i) {
    audDollar.push(usd[i] * 1.5)

}
console.log (audDollar)


// console.log(audConvertion)
// console.log(audConvertion2)
// console.log(adultAge)
// console.log(adult)
// console.log(minor)