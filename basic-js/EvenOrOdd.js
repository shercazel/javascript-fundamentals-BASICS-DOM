let number = 1

while (number <= 20) {
    if (number %10 == 0 ){
        console.log(number + " is divisible by 10 and 5");
    }
    else if (number % 5 == 0) {
        console.log(number + " is divisible by 5 ");
    }
    else if (number % 2 == 0) {
        console.log(number + " is Even number");
    } else {
        console.log(number + " is Odd number");
    }
    number++
}