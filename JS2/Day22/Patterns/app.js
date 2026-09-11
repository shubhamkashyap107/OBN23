// let n = 5

// let spaces = n - 1
// let stars = 1


// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let sp = 1; sp <= spaces; sp++)
//     {
//         str += "  "
//     }

//     for(let st = 1; st <= stars; st++)
//     {
//         str += "* "
//         // str += i + " "
//         // str += st + " "
//         // if(i == n || st == 1 || st == stars)
//         // {
//         //     str += "* "
//         // }
//         // else
//         // {
//         //     str += "  "
//         // }
//     }

//     console.log(str)

//     spaces--
//     stars += 2
// }

// let spaces = 0
// let stars = 2 * n - 1

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let sp = 1; sp <= spaces; sp++)
//     {
//         str += "  "
//     }

//     for(let st = 1; st <= stars; st++)
//     {
//         if(i == 1 || st == 1 || st == stars)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)

//     spaces++
//     stars -= 2
// }


// let n = 5
// let spaces = (n - 1) / 2
// let stars = 1


// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let sp = 1; sp <= spaces; sp++)
//     {
//         str += "  "
//     }

//     for(let st = 1; st <= stars; st++)
//     {
//         str += "* "
//     }

//     console.log(str)

//     if(row <= Math.floor(n / 2))
//     {
//         spaces--
//         stars+=2
//     }
//     else
//     {
//         spaces++
//         stars-=2
//     }
// }

// let n = 3

// let stars = 1
// let spaces = n

// for(let row = 1; row <= 2 * n + 1; row++)
// {
//     let str = ""

//     for(let sp = 1; sp <= spaces; sp++)
//     {
//         str += "  "
//     }

//     for(let st = 1; st <= stars; st++)
//     {
//         if(st == 1 || st == stars)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)

//     if(row <= n)
//     {
//         spaces--
//         stars += 2
//     }
//     else
//     {
//         spaces++
//         stars -= 2
//     }
// }

// let n = 5
// let stars = n
// let spaces = 0

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }
//     for(let j = 1; j <= stars; j++)
//     {
//         // str += "* "
//         if(j == 1 || j == stars || i == 1 || i == n)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)

//     if(i <= Math.floor(n / 2))
//     {
//         stars-=2
//         spaces++
//     }
//     else
//     {
//         spaces--
//         stars+=2
//     }
// }



let n = 5
let stars = 1
let spaces = n - 2


for(let row = 1; row <= n; row++)
{
    let str = ""

    for(let star = 1; star <= stars; star++)
    {
        str += "* "
    }

    for(let space = 1; space <= spaces; space++)
    {
        str += "  "
    }

    for(let star = 1; star <= stars; star++)
    {
        if(star == stars && row == (n + 1) / 2)continue
        str += "* "
    }

    console.log(str)

    if(row < n / 2)
    {
        spaces-=2
        stars++
    }
    else
    {
        spaces+=2
        stars--
    }

}