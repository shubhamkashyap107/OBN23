// function Alphabets(str) {
//     // Write your logic here

//     let map = new Map()

//     for(let item of str)
//     {
//         map.set(item, (map.get(item) || 0 ) + 1)
//     }


//     // console.log(map)
//     let ans = ""

//     for(let i = 97; i <= 122; i++)
//     {
//         if(map.has(String.fromCharCode(i)))
//         {
//             ans += map.get(String.fromCharCode(i)) + " "
//         }
//         else
//         {
//             ans += "0 "
//         }
//     }


//     return ans



// }




// console.log(Alphabets("stole now noch"))





// function removeDuplicates(str) {
//     const set = new Set(str)
//     let ans = ""

//     set.forEach(val => {
//         ans += val
//     })

//     return ans
// }



// console.log(removeDuplicates("helloworld"))




function findSum(arr, n, sum) {
  
    let map = new Map()
    let ans = 0

    for(let item of arr)
    {
        if(map.has(sum - item))
        {
            ans += map.get(sum - item)
        }

        map.set(item, (map.get(item) || 0) + 1)
    }


    return ans

}


console.log(findSum([1,1,1,5], 5, 6))








// function findLongestSubArray(arr, k) {
//   let ans = 0


//   for(let i = 0; i < arr.length; i++)
//   {
//     let sum = 0

//     for(let j = i; j < arr.length; j++)
//     {
//         sum += arr[j]

//         if(sum == k)
//         {
//             ans = Math.max(ans, j - i + 1)
//         }
//     }
//   }

//   return ans
// }


// console.log(findLongestSubArray([10,5,2,7,1,9], 15))

