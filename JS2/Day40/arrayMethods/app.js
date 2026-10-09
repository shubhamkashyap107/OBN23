// let arr = [
//     1,0,2,84,5
// ]
// let t = 22

// const ans = arr.find((val, idx) => {
//     return val == t
// })

// console.log(ans)



// let arr = [
//     {
//         name : "S",
//         age : 18
//     },
//     {
//         name : "A",
//         age : 41
//     },
//     {
//         name : "D",
//         age : 18
//     },
// ]

// let targetAge = 18

// let ans = arr.find((item) => {
//     return item.age == targetAge
// })

// console.log(ans)



// let arr = [2,4,6,8,10,12, 1]

// const ans = arr.every((item) => {
//     return item % 2 != 0
// })

// const ans2 = arr.some((item) => {
//     return item % 2 != 0
// })

// console.log(ans, ans2)


// let arr = [3, 8, 12, 5, 20]
// let ans = arr.find(item => item > 10)
// console.log(ans)




// let arr2 = ["Banana", "apple", "Avocado", "Cherry"]
// let ans2 = arr2.find((item) => {
//     return item[0].toLowerCase() == "a"
// })
// console.log(ans2)


// const products = [
//   { name: "Mouse", price: 450, inStock: false },
//   { name: "Keyboard", price: 1200, inStock: true },
//   { name: "USB Cable", price: 199, inStock: true },
//   { name: "Pen Drive", price: 350, inStock: true }
// ];

// let ans3 = products.find((item) => {
//     return item.inStock && item.price < 500
// })
// console.log(ans3)


// console.log([].every(n => n > 10))


let arr = [1,2,3,4,5,6]

let ans = arr.every((item, idx) => {
    if(idx == 0)
    {
        return true
    }
    else
    {
        return arr[idx] > arr[idx - 1]
    }
})

console.log(ans)