// let bankAccount1 = {
//     name : "P1",
//     balance : 50000,
//     mobileNumber : 1234567890
// }


// let bankAccount2 = bankAccount1

// bankAccount2.name = "P2"
// bankAccount2.balance = 10000
// bankAccount2.mobileNumber = 9876543210





// console.log(bankAccount1)
// console.log(bankAccount2)





// let arr = [1,2,3,4,5]
// let arr2 = [11,12,13,14,15]

// console.log(...arr) // console.log(1,2,3,4,5)

// // concat two arrays
// // console.log(arr.concat(arr2))
// const val = [...arr, "Shubham" ,...arr2] // [1,2,3,4,5, 11,12,13,14,15]


// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }

// let obj2 = {
//     c : 1000,
//     x : 4,
//     y : 5,
//     z : 6
// }

// let val2 = {
//     ...obj,
//     ...obj2
// }



// console.log(val2)

// let str = "ABCDEFGHIJ"

// console.log(...str) // console.log("A", "B", "C"...)




// let bankAccount1 = {
//     name : "P1",
//     balance : 50000,
//     mobileNumber : 1234567890

// }


// let bankAccount2 = {...bankAccount1}
// bankAccount2.name = "P2"
// bankAccount2.mobileNumber = 12345678987654
// bankAccount2.balance = 100000


// console.log(bankAccount1)
// console.log(bankAccount2)






let person1 = {
    name : "Shubham",
    age : 22,
    address : {
        city : "Delhi",
        country : "India"
    },
    cars : ["BMW", "ALto"],
    sayHi : () => {
        console.log("Hello")
    }
}
// person1.sayHi()

// let person2 = {...person1} // shallow copy
// let person2 = structuredClone(person1) // deep copy
let str = JSON.stringify(person1)
let person2 = JSON.parse(str) // deep copy

person2.sayHi  = () => {
    
}

// person2.name = "A"
// person2.address.city = "Haryana"
// person2.cars.push("THar")

console.log(person1)
console.log(person2)



// let arr = [1,2,3,4,5]
// let obj = {
//     name : "S",
//     age : 22
// }


// let jsonArr = JSON.stringify(arr)
// let originalData = JSON.parse(jsonArr)

// let jsonObj = JSON.stringify(obj)
// let originalObj = JSON.parse(jsonObj)


// console.log(arr)
// console.log(jsonArr)
// console.log(originalData)

// console.log(obj)
// console.log(jsonObj)
// console.log(originalObj.name)