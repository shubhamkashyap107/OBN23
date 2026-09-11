// let arr = [[1,2,3],[4,5,6],[7,8,9]]


// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])
// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])
// console.log(arr[2][0])
// console.log(arr[2][1])
// console.log(arr[2][2])








// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1
// 2 2

// for(let i = 0; i < 3; i++) // 0,1,2
// {
//     // let str = ""

//     for(let j = 0; j < 3; j++) // 0,1,2
//     {
//         // str += "* "
//         console.log(i,j)
//     }

//     // console.log(str)
// }



// let arr = [[1,2,3,4],[11,12,13,14,15],[21,22, 23,24, 25,26]]


// for(let row = 0; row < arr.length; row++) //0,1,2
// {
//     let str = ""

//     for(let col = 0; col < arr[row].length; col++)
//     {
//         if(row == 0 || row == arr.length - 1 || col == 0 || col == arr[row].length - 1)
//         {
//             str += arr[row][col] + " "
//         }
//         else
//         {
//             str += "  "
//         }
        
//     }

//     console.log(str)
// }



// let arr = [[1,2,3,4], [5,6,7,8,9], [1,2,3,4]]


// for(let i = 0; i < arr.length; i++)
// {
//     for(let j = 0; j < arr[i].length; j++)
//     {

//     }
// }


// for(let item of arr)
// {
//     // console.log(item)

//     let str = ""

//     for(let ele of item)
//     {
//         // console.log(ele)
//         str += ele + " "
//     }

//     console.log(str)
// }

// column wise traversal
let arr = [[1,2,3], [4,5,6], [7,8,9]]
let str = ""

for(let i = 0; i < arr.length; i++)
{
    for(let j = 0; j < arr[i].length; j++)
    {
        str += arr[j][i] + " "
    }
}


console.log(str)


