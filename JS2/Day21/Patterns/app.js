// let n = 2
// let m = 13
// let count = 1
// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= m; j++)
//     {
//         // str += "* "

//         // if(i == 1 || i == n || j == 1 || j == m)
//         // {
//         //     str += "* "
//         // }
//         // else
//         // {
//         //     str += "  "
//         // }

//         // str += i + " "
//         // str += j + " "
//         // str += count + " "
//         // count++

//         str += String.fromCharCode(64 + count) + " "
//         count++
//     }

//     console.log(str)
// }


// // -> * * * *
// // -> 
// // -> 



// right angled triangle

// * 
// * * 
// * * * 
// * * * *

// let n = 4

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let star = 1; star <= row; star++)
//     {
//         // str += "* "
//         if(row == n || star == 1 || row == star)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
// }



// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let star = 1; star <= n - row + 1; star++)
//     {
//         if(row == 1 || star == 1 || star == n - row + 1)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
// }



// let n = 4

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let space = 1; space <= n - row; space++)
//     {
//         str += "  "
//     }

//     for(let star = 1; star <= row; star++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }



let n = 4

for(let row = 1; row <= n; row++)
{
    let str = ""

    for(let space = 1; space <= row - 1; space++)
    {
        str += "  "
    }

    for(let star = 1; star <= n - row + 1; star++)
    {
        str += "* "
    }

    console.log(str)
}









