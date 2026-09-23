// const arr = [9,1,0,3,4,5,-15,19,13,14,11,22,24,23,21]

// arr.sort() // lexographical / dictionary

// arr.sort((a,b) => {
//     return a - b
// })


// arr.sort((a,b) => {
//     return b - a
// })

// console.log(arr)



// let arr = [
//     {
//         name : "A",
//         age : 32
//     },

//     {
//         name : "B",
//         age : 30
//     },

//     {
//         name : "C",
//         age : 18
//     },

//     {
//         name : "D",
//         age : 6
//     },
// ]


// arr.sort((a,b) => {
//     // return a.age - b.age
//     return b.age - a.age
// })



// console.log(arr)





// let arr = [5, 2, 8, 1, 3]
// arr.sort((a,b) => {
//     return a - b
// })
// console.log(arr)



// let arr2 = [10, 4, 7, 2, 9]
// arr2.sort((a,b) => {
//     return b - a
// })

// console.log(arr2)



// let arr3 = ["banana", "apple", "mango", "cherry"]
// arr3.sort()
// console.log(arr3)



// let arr4 = ["Raj", "Amit", "Ram", "Karan", "Bob"]
// // [
// //     "Bob",
// //     "Raj",
// //     "Ram",
// //     "Amit",
// //     "Karan"
// // ]

// arr4.sort((a, b) => {
//     if(a.length == b.length)
//     {
//         return a.localeCompare(b)
//     }
//     return a.length - b.length
// })
// // -ve -> a - b
// // +ve -> a - b
// // 0 -> a - b


// console.log(arr4)




// let arr = [
//     {name:"Rahul",age:20}, 
//     {name:"Amit",age:18}, 
//     {name:"Priya",age:20},
//     {name:"Raj",age:18}
// ]


// arr.sort((a,b) => {
//     if(a.age == b.age)
//     {
//         return a.name.localeCompare(b.name)
//     }
//     return a.age - b.age
// })

// console.log(arr)


// let arr = [
//     {name:"Rahul",salary:50000}, 
//     {name:"Amit",salary:70000}, 
//     {name:"Priya",salary:70000},
//     {name:"Raj",salary:50000}

// ]

// arr.sort((a,b) => {
//     if(a.salary == b.salary)
//     {
//         return a.name.localeCompare(b.name)
//     }
//     return b.salary - a.salary
// })

// console.log(arr)


// let arr = [
//     {name:"A",price:500,rating:4.2}, 
//     {name:"B",price:300,rating:4.5},
//     {name:"C",price:500,rating:4.8}, 
//     {name:"D",price:300,rating:4.1}
// ]

// arr.sort((a,b) => {
//     if(a.price == b.price)
//     {
//         return b.rating - a.rating
//     }
//     return a.price - b.price
// })


// console.log(arr)



// let arr = [
//     {name:"A",marks:90,age:21}, 
//     {name:"B",marks:90,age:19}, 
//     {name:"C",marks:85,age:20}
// ]


// arr.sort((a,b) => {
//     if(a.marks == b.marks)
//     {
//         return a.age - b.age
//     }
//     return b.marks - a.marks
// })

// console.log(arr)


// let arr = [4, 4, 2, 2, 2, 3, 3, 1]

// let obj = {}

// for(let item of arr)
// {
//     obj[item] = (obj[item] || 0) + 1
// }


// arr.sort((a, b) => {
//     if(obj[a] == obj[b])
//     {
//         return a - b
//     }

//     return obj[b] - obj[a]
// })

// console.log(arr)


// let arr =  ["cat", "elephant", "dog", "tiger", "ant"]

// arr.sort((a, b) => {
//     if(a.length == b.length)
//     {
//         return a.localeCompare(b)
//     }
//     return b.length - a.length
// })

// console.log(arr)



// let arr =  [
//     {name:"A",score:100,level:5}, 
//     {name:"B",score:100,level:7},
//     {name:"C",score:90,level:8}, 
//     {name:"D",score:100,level:7}
// ]

// arr.sort((a,b) => {

//     if(a.score == b.score)
//     {
//         if(a.level == b.level)
//         {
//             return a.name.localeCompare(b.name)
//         }
//         return b.level - a.level
//     }
//     return b.score - a.score

// })

// console.log(arr)


let arr = [
    {title:"A",rating:8.5,year:2022}, 
    {title:"B",rating:9.0,year:2020},
    {title:"C",rating:8.5,year:2019}
 ]