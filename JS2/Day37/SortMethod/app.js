// let arr = ["yug", "aryan", "abhishek", "aayan", "bharat"] // a,e,j,y,z

// console.log(arr)
// arr.sort() // destructive
// console.log(arr)


// let arr = [5,10,100,50,300,4,3,2,1] // 1,2,3,4,5,10,50,100,300

// console.log(arr)

// arr.sort((a,b) => {
//     // return a - b // inc
//     return b - a // dec
// })

// console.log(arr)


// let students = [
//     [80, "Akash"],
//     [40, "Rakshita"],
//     [30, "Sumit"],
//     [100, "Shubham"],
//     [100, "Ayush"],
// ]

// // tie breaker
// students.sort((a, b) => {
//     if(a[0] == b[0])
//     {
//         return a[1].localeCompare(b[1])
//     }
//     return b[0] - a[0]
// })

// console.log(students)



// let arr = ["z", "a", "b", "y", "j"]

// arr.sort((a,b) => {
//     // return a - b wrong

//     // return a.localeCompare(b)
//     return b.localeCompare(a)
// })

// console.log(arr)


let arr = [4, 4, 2, 2, 2, 3, 3, 1]

const freq = {}

for(let item of arr)
{
    freq[item] = (freq[item] || 0) + 1
}


arr.sort((a, b) => {
    if(freq[a] == freq[b])
    {
        return a - b
    }
    return freq[b] - freq[a]
})

console.log(arr)