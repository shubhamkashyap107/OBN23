// let arr = [99, 0, 10, -3, 10,2,3,4,10]
// let target = 10


function linearSearchBoolean(arr, t)
{
    for(let item of arr)
    {
        if(item == t)
        {
            return true
        }
    }

    return false
    
}


function linearSearchFirstOccurence(arr, t)
{
    // for(let i = 0; i < arr.length; i++)
    // {
    //     if(arr[i] == target)
    //     {
    //         return i
    //     }
    // }

    // return -1


    let idx = -1

    for(let i = 0; i < arr.length; i++)
    {
        console.log("Loop chala")
        if(arr[i] == t)
        {
            idx = i
            break
        }
    }

    return idx

}

function linearSearchLastOccurence(arr, t)
{
    for(let i = arr.length - 1; i >= 0; i--)
    {
        if(arr[i] == t)
        {
            return i
        }
    }

    return -1

}

// console.log(linearSearchBoolean(arr, target))
// console.log(linearSearchFirstOccurence(arr, target))
// console.log(linearSearchLastOccurence(arr, 999))


// let arr = [
//     {
//         age : 32,
//         name : "A"
//     },
//     {
//         age : 30,
//         name : "B"
//     },
//     {
//         age : 2,
//         name : "C"
//     },
//     {
//         age : 90,
//         name : "D"
//     },
//     {
//         age : 10,
//         name : "E"
//     },

// ]


// let max = arr[0]

// for(let item of arr)
// {
//     if(item.age > max.age)
//     {
//         max = item
//     }
// }

// console.log(max.name)


function firstRepeatingNumber(arr)
{
    for(let i = 1; i < arr.length; i++)
    {
        if(!(arr.indexOf(arr[i]) == i))
        {
            return arr[i]
        }
    }

    return null
}


// let arr = [1,2,3,4,5,1,23]
// console.log(firstRepeatingNumber(arr))

// Find the closest element
// Given a target, find the array element having the minimum absolute difference from it.


let arr = [1,11,21,31,2,20,56]
let target = 24