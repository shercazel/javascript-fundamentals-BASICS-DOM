// Write a program that prints the numbers from 1 to 100, but:

// For numbers divisible by 3, print "Fizz" instead of the number.

// For numbers divisible by 5, print "Buzz" instead of the number.

// For numbers divisible by both 3 and 5, print "FizzBuzz".


// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else {
//         console.log(i);
//     }

// let name1 = "Sherwin Castillo"

// for (let i = name1.length - 1; i >= 0; i--) {
//     console.log(name1[i])
// }


// function myStudent(Student) {
//     return Student



// console.log(myStudent(
//     {
//         name: "Sherwin Castillo",
//         age: [12],
//         course: "Bsit Web Developer"
//     }))
// }

// let numbers = [12, 32, 33, 32, 12, 21, 43, 55, 43, 12, 45, 3, 5, 6, 6]
// let dvsbleBythree = []


// numbers.filter((element) => {
//     if (element % 3 === 0) {
//         dvsbleBythree.push(element)
//         return element;
//     }
// })
// console.log(numbers)
// console.log(dvsbleBythree)

// let age = 15

// const isAdult = (age) => {
//     return age >= 18 ? "Yes" : "No"
// }

// console.log(isAdult(age))

let arrayAge = [12, 12, 12, 34, 56, 21, 12, 1, 2, 54, 67, 21, 45, 76, 43, 98, 21]


const isMinor = (age) => {
    return {
        minor: age.filter(age => age < 18),
        adult: age.filter(age => age >= 18 && age <= 60),
        teenager: age.filter(age => age >= 13 && age < 18),
        old: age.filter(age => age > 60)
    }

}

const gr = isMinor(arrayAge)
console.log(gr)






























