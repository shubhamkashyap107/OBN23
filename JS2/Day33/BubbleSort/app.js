const arr = [6,5,4,3,2,1]
let counter = 0


// for(let i = 0; i < arr.length - 1; i++)
// {

//     let isArraySorted = true

//     for(let j = 0; j < arr.length - i - 1; j++)
//     {
//         counter++
//         if(arr[j] > arr[j + 1])
//         {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
            
//             isArraySorted = false
//         }
//     }

//     if(isArraySorted)
//     {
//         break
//     }
 

// }


for(let i = 0; i < arr.length - 1; i++)
{

    let isArraySorted = true

    for(let j = 0; j < arr.length - i - 1; j++)
    {
        counter++
        if(arr[j] < arr[j + 1])
        {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            
            isArraySorted = false
        }
    }

    if(isArraySorted)
    {
        break
    }
 

}




console.log(arr, counter)