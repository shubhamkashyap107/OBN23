// let a = 10
// let b = 20

// // console.log(a)
// // console.log(b)


// // using a third variable
// // let temp = a
// // a = b
// // b = temp

// // without third variable
// a = a + b
// b = a - b
// a = a - b



// // console.log(a)
// // console.log(b)




// let arr = [1,2,3,4,5,6] // 3gb
// let temp = [] // 3gb

// for(let i = arr.length - 1; i >= 0; i--)
// {
//     temp.push(arr[i])
// }


// console.log(temp)





// let arr = [1,2,3,4]

// let start = 0
// let end = arr.length - 1

// while(start < end)
// {

//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp

//     start++
//     end--
// }

// // console.log(arr)



let arr = [1,-10,0,7,3,7,7]
let target = 79

// let ans = -1

// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i] == target)
//     {
//         ans = i
//     }
// }


// console.log(ans)










function linearSearch(arr, target)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == target)
        {
            return i
        }
    }

    return -1
}

function linearSearchLastOccurence(arr, tar)
{
    for(let i = arr.length - 1; i >= 0; i--)
    {
        if(arr[i] == tar)
        {
            return i
        }
    }

    return -1
}

function linearSearchAllOccurences(arr, tar)
{
    let ans = []

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == tar)
        {
            ans.push(i)
        }
    }

    return ans
}

function hasTarget(arr, tar)
{
    for(let item of arr)
    {
        if(item == tar)
        {
            return true
        }
    }

    return false
}



// console.log(linearSearch(arr, target))
// console.log(linearSearchLastOccurence(arr, 7))
// console.log(linearSearchAllOccurences(arr, 78))

