// var age = 2
// age < 18 ? console.log("Child") : console.log("Adult")


// var n = -23
// n < 0 ? console.log("Negative") : (n == 0 ? console.log("Zero") : console.log("Positive"))



var n = 0

n == 0 ? console.log("Zero") : 
(n < 0 ? (
    n % 2 == 0 ? console.log("-ve, Even") : console.log("-ve, Odd")
) : (
    n % 2 == 0 ? console.log("+ve, Even") : console.log("+ve, Odd")
))

var day = 70
day == 1 ? console.log("Monday") :
day == 2 ? console.log("Tuesday") :
day == 3 ? console.log("Wednesday") :
day == 4 ? console.log("Thursday") :
day == 5 ? console.log("Friday") :
day == 6 ? console.log("Saturday") :
day == 7 ? console.log("Sunday") :
console.log("Invalid Input")