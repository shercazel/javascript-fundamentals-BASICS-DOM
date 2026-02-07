//array
// let fruits = ["Apple", "Avocado", "Calamansi", "Papaya", "Orange"]


// for (let i = 0; i <= fruits.length - 1; i++) {
//     console.log(fruits[i] + " is a type of fruit");
// }
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1])

// //array methods 
// //1. push method
// fruits.push("Grapes");
// fruits.push("Banana");
// console.log(fruits);
// // 2 filter method

//filtered array
// let price = [23, 231, 32, 13, 21, 21, 21, 21]

// console.log(price);
// let filterPrice = price.filter((element) => {
//     // return element >20;
//     // return element < 50;
//     return element == 21;

// })
// console.log(filterPrice);

// //filtered out all of the minor in the club 
// let personName = ["sherwin", "Tablang", , "", "Yamzon", "Errol"]
// let age = [23, 20, 20, 21, 12, 10, 24, 21]

// let clubFilter = age.filter((element => {
//     return element > 18


// }
// ))

// console.log(clubFilter);

// //without filter method naman
// // filter out the minors in the club
// let pAge = [18, 20, 16, 15, 21]
// let minors = []
// let adults = []


// for (let i = 0; i < pAge.length; ++i) {
//     if (pAge = 18) {
//         console.log(pAge[i] + " Youre an adult! Welcome to the club!")
//         adults.push(pAge[i]);
//     } else {
//         console.log(pAge[i] + " Youre a minor! Sorry you cant join the club")
//         minors.push(pAge[i]);
//     }
//     console.log();

// }
// console.log("list of minors " + minors)
// console.log("list of adults " + adults)



// let edad = [21, 21, 98, 12, 21, 98, 13]
// let adult = [];
// let minor = [];


// edad.filter((matandaNa) => {
//     if (matandaNa >= 18) {
//         console.log(matandaNa + " Youre an adult! Welcome to the club!")
//         adult.push(matandaNa);
//     } else {
//         console.log(matandaNa + " Youre an minor! get out!")
//         minor.push(matandaNa)
//     }
// })

// console.log(`Minor: ${minor}`)
// console.log(`Adult: ${adult}`);

// 3.map Method
// map is non mutating method

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let age = [21, 21, 17, 12, 12, 12]
let matanda = []
let bata = []

array.map

let newArray = array.map((timesTwo) => {
    console.log(timesTwo)
    return "mababago";

})

let adultAge = age.map((element) => {
    if (element >= 18) {
        matanda.push(element);
        return  `${element} is adult`
    } else {
        age.pop(element)
        return `${element} is minor`
    }
})
console.log(array)
console.log(newArray)
console.log(adultAge)
console.log(matanda)
console.log(bata)
console.log(age)













