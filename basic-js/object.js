//Create Sign up  User Challenge
//Create a function that accepts parameters
let userAccount = [
    {
        user: "jerwin",
        email: "1231",
        password: "1234",
        discord: "ssasda",
        subs: "nope",
        lessonsDone: [1, 2]
    },
    {
        user: "nhelmhar",
        email: "1231",
        password: "1234",
        discord: "sasas",
        subs: "nope",
        lessonsDone: [1, 2]

    }
]

function createSignUpUserChallenge(user1, user2) {
    userAccount.push(user1, user2)
}

createSignUpUserChallenge({
    email: "sherwincastilloemail.com",
    password: "123qkwk",
    name: "Sherwin",
    discord: "Sheheshe",
    vip: "Vip",
    lessonsDone: [1, 2, 3, 4, 5]
},
    {
        email: "sherwincastilloemail.com",
        password: "123qkwk",
        name: "Sherwin",
        discord: "Sheheshe",
        vip: "Vip",
        lessonsDone: [1, 2, 3, 4, 5]
    },
)

console.log(userAccount)





// let user = {
//     user: "Sherwin Castillo",
//     password: "24282001",
//     gmail: "sherwincastillo454580@gmail.com",
//     fb: "Shekrazzy",
//     ml: "Sherkrazyy.ml",
//     cod: "bonete"
// }

// console.log(`name: ${user.user} and his ml account is ${user.ml}`)