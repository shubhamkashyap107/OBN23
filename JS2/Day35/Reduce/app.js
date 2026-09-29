// let arr = [1,2,3,4,5]

// map, filter, reduce -> non destructive


// const ans = arr.reduce((total, curr) => {
//     return total * curr
// }, 1)

// console.log(ans)

// let arr = [1,2,3,4,5] // [1,4,9,16,25]

// const ans = arr.reduce((total, curr) => {
//     // return [...total, curr ** 2]

//     if(curr % 2 == 0)
//     {
//         return [...total, curr]
//     }
//     else
//     {
//         return total // [], [...total] -> []
//     }

// }, [])

// console.log(ans)





// let names = ["suraj", "abhi", "nipun", "deepak"]


// let ans = names.reduce((total, curr, index) => {
//     return {
//         ...total,
//         [`name${index}`] : curr
//     }
// }, {})

// console.log(ans)


// let arr = [1,2,3,4,5,6,7,8,9]


// let ans = arr.reduce((total, curr) => {
//     if(curr % 2 == 0)
//     {
//         total += curr
//     }

//     return total
    
// }, 0)

// // let ans = arr.reduce((total) => {
// //     return ++total
// // }, 0)


// console.log(ans)




// let arr = [10,20,30,40,50]


// let ans = arr.reduce((total, curr) => {
//     return [curr, ...total]
// }, [])


// const ans = arr.reduce((total, curr, index) => {
//     if(index == arr.length - 1)
//     {
//         return (total + curr) / arr.length
//     }
//     return total + curr
// })

// console.log(ans)


let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];


let ans = arr.reduce((total, curr) => {
    
   total[curr] = (total[curr] || 0) + 1

   return total
    
}, {})

console.log(ans)