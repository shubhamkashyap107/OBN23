// let arr = [1,2,3,4,5,6]

// reduce can do all the things that map and filter can do

// const ans = arr.reduce((prev, curr) => {
//     prev.push(curr ** 2)
//     return prev
// }, [])

// const ans2 = arr.reduce((prev, curr) => {
//     if(curr % 2 == 0)
//     {
//         prev.push(curr)
//     }

//     return prev
// }, [])

// console.log(ans)
// console.log(ans2)


// const ans = arr.reduce((prevVal, currVal) => {
//     return prevVal + currVal
// }, 10)


// console.log(ans)


// let arr = [1,2,3,4,1,2,3,1,2,1]

// const ans = arr.reduce((prev, curr) => {

//     prev[curr] = (prev[curr] || 0) + 1
//     return prev

// }, {})

// console.log(ans)


// let arr = [10, 20, 30, 40, 50, 60]

// const ans = arr.reduce((prev) => {
//     return prev + 1
// }, 0)

// console.log(ans)







// let arr2 = [12, 45, 7, 89, 34, 23];

// const ans3 = arr2.reduce((prev, curr) => {
//     return Math.max(prev, curr)
// }, -Infinity)

// console.log(ans3)


// let arr = [1, 2, 3, 4];

// let ans = arr.reduce((prev, curr) => {
//     if(curr % 2 == 0)
//     {
//         prev += curr
//     }
//     return prev
// }, 0)

// console.log(ans)


// let arr = [10, 15, 20, 25, 30, 35, 40];

// const ans = arr.reduce((prev, curr) => {
//     if(curr % 2 == 0)
//     {
//         prev++
//     }

//     return prev
// }, 0)

// console.log(ans)


// let arr = [10, 20, 30, 40, 50];

// let ans = arr.reduce((prev, curr, idx) => {
//     // return prev + curr

//     if(idx == arr.length - 1)
//     {
//         prev += curr
//         return prev / arr.length
//     }


//     return prev + curr


// }, 0)

// console.log(ans)


let arr = [1, 2, 3, 4, 5];


let ans1 = arr.reduce((prev, curr, idx) => {
    // return [curr, prev]

    if(idx == 1)
    {
        return [curr, prev]
    }
    else
    {
        return [curr, ...prev]
    }
})





let ans2 = arr.reduce((prev, curr) => {
    prev.unshift(curr)
    return prev
}, [])

console.log(ans1, ans2)


let strArr = ["apple", "banana", "apple", "orange", "banana", "apple"];


let res = strArr.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1

    // if(prev[curr])
    // {
    //     prev[curr]++
    // }
    // else
    // {
    //     prev[curr] = 1
    // }

    return prev

}, {})

console.log(res)
