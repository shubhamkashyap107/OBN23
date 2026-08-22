// let obj = {
//     naam : "XYZ",
//     age : 32,
//     isPresent : false,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     colors : ["Green", "red", "blue"],
//     sayHi : () => {
//         console.log("Hello")
//     }
// }

// destructuring

// const{age, naam, isPresent} = obj
// console.log(naam, age, isPresent)




// bracket notation
// console.log(obj["naam"])
// console.log(obj["address"]["city"])
// console.log(obj["colors"][2])
// obj["sayHi"]()


// dot notation
// console.log(obj.name)
// console.log(obj.isPresent)
// console.log(obj.address.city)
// console.log(obj.address.country)
// console.log(obj.colors[0])
// console.log(obj.colors[1])
// console.log(obj.colors[2])
// obj.sayHi()



// let obj = {
//     model : "Version0",
//     color : "red"
// }

// console.log(obj)


// obj.model = "Version1"
// obj["color"] = "black"


// console.log(obj)


// let obj = {
//     naam : "XYZ",
//     age : 32,
//     isPresent : false,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     colors : ["Green", "red", "blue"],
//     sayHi : () => {
//         console.log("Hello")
//     }
// }


// for(let item in obj)
// {
//     console.log(item, obj[item]) 
// }


// let score = 10
// let match = 20
// let win = true

// let obj = {score, matchNumber : match, win}
// let userInput = "win"

// // let obj = {
// //     score : score,
// //     match : match,
// //     win : win
// // }


// console.log(obj)

// delete obj.score
// delete obj[userInput]

// console.log(obj)


let arr = [
  {"name": "John", "id": 123, "marks": 98},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Wick", "id": 115, "marks": 75}
]


let ans = []

for(let item of arr)
{
    ans.push(item.name.toUpperCase())
}


