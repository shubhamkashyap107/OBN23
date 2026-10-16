// // function Alphabets(str) {
// //     // Write your logic here

// //     let map = new Map()

// //     for(let item of str)
// //     {
// //         map.set(item, (map.get(item) || 0 ) + 1)
// //     }


// //     // console.log(map)
// //     let ans = ""

// //     for(let i = 97; i <= 122; i++)
// //     {
// //         if(map.has(String.fromCharCode(i)))
// //         {
// //             ans += map.get(String.fromCharCode(i)) + " "
// //         }
// //         else
// //         {
// //             ans += "0 "
// //         }
// //     }


// //     return ans



// // }




// // console.log(Alphabets("stole now noch"))





// // function removeDuplicates(str) {
// //     const set = new Set(str)
// //     let ans = ""

// //     set.forEach(val => {
// //         ans += val
// //     })

// //     return ans
// // }



// // console.log(removeDuplicates("helloworld"))




// function findSum(arr, n, sum) {
  
//     let map = new Map()
//     let ans = 0

//     for(let item of arr)
//     {
//         if(map.has(sum - item))
//         {
//             ans += map.get(sum - item)
//         }

//         map.set(item, (map.get(item) || 0) + 1)
//     }


//     return ans

// }


// console.log(findSum([1,1,1,5], 5, 6))








// // function findLongestSubArray(arr, k) {
// //   let ans = 0


// //   for(let i = 0; i < arr.length; i++)
// //   {
// //     let sum = 0

// //     for(let j = i; j < arr.length; j++)
// //     {
// //         sum += arr[j]

// //         if(sum == k)
// //         {
// //             ans = Math.max(ans, j - i + 1)
// //         }
// //     }
// //   }

// //   return ans
// // }


// // console.log(findLongestSubArray([10,5,2,7,1,9], 15))





// var groupAnagrams = function(arr) {
//     let map = new Map()

//     for(let item of arr)
//     {
       
//         let temp = item.split("")
//         temp.sort()

//         let str = temp.join("")

//         if(map.has(str))
//         {
//             map.get(str).push(item)
//         }
//         else
//         {
//             map.set(str, [item])
//         }

//     }

//     let ans = []
//     map.forEach((val) => {
//         ans.push(val)
//     })
//     return ans
// };









// let m1 = new Map()
// let m2 = new Map()

// console.log(m1 == m2)



let str = "racecar"

let arr = new Array(26).fill(0)

for(let item of str)
{
    // console.log(item.charCodeAt() - 97)

    arr[item.charCodeAt() - 97]++
}


console.log(arr)


for(let i = 0; i < arr.length; i++)
{
    console.log(String.fromCharCode(97 + i), arr[i])
}