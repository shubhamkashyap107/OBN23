// let arr = [1,2,3,4,5] // [1,4,9,16,25], [2,4]


// let ans = arr.map((item, idx) => {
//     // return item ** 2
//     // return item + 10
//     if(idx % 2 == 0)
//     {
//         return item * 2
//     }
//     else
//     {
//         return item * 5
//     }
// })

// console.log(ans)


// let arr = [0,1,2,3,4,5,6,7,8]


// let ans = arr.filter((item) => {
//     // expression -> true/false
//     return item % 2 != 0
// })

// console.log(ans)


let arr = [
    {
        name : "S",
        age : 20
    },
    {
        name : "A",
        age : 30
    },
    {
        name : "C",
        age : 18
    }
]


console.log(arr.filter(item => item.age <= 20).map(item => item.name))

// let ans = arr.filter((item) => {
//     return item.age <= 20
// })

// let ans2 = ans.map((item) => {
//     return item.name
// })

// console.log(ans2)
