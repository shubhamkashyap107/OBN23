let arr = [1,3,5,2,4,10,99,1000]


console.log(arr.filter(item => item % 2 != 0).map(item => item ** 2))


// let oddArr = arr.filter((item) => {
//     return item % 2 != 0
// })

// const sqArr = oddArr.map((item) => {
//     return item ** 2
// })

// console.log(sqArr)


// const val = arr.find((item) => {
//     return item == -5
// })
// console.log(val)


// const val = arr.every((item, index) => {
//     return item > 0
// })

// const val2 = arr.some((item, index) => {
//     return item < 0
// })


// console.log(val)
// console.log(val2)



// let array = []
// array.fill(10)
// console.log(array)

// const myArr = new Array(100).fill(99)
// myArr.push(100)
// console.log(myArr)