let n = 4

// for(let rows = 1; rows <= n; rows++)
// {
//     let str = ""

//     for(let stars = 1; stars <= n; stars++)
//     {
//         str += "*"
//     }
    
//     console.log(str)
// }


// for(let rows = 1; rows <= n; rows++)
// {
//     let str = ""
    
//     for(let stars = 1; stars <= n; stars++)
//     {
//         str += rows
//     }
    
//     console.log(str)
// }



// for(let rows = 1; rows <= n; rows++)
// {
//     let str = ""
    
//     for(let stars = 1; stars <= n; stars++)
//     {
//         str += stars
//     }
    
//     console.log(str)
// }

// let count = 1
// for(let rows = 1; rows <= n; rows++)
// {
//     let str = ""
    
//     for(let stars = 1; stars <= n; stars++)
//     {
//         str += count
//         count++
//     }
    
//     console.log(str)
// }



for(let rows = 1; rows <= n; rows++)
{
    let str = ""

    for(let stars = 1; stars <= n; stars++)
    {
        // str += "*"

        if(rows == 1 || rows == n || stars == 1 || stars == n)
        {
            str += "* "
        }
        else
        {
            str += "  "
        }
    }
    
    console.log(str)
}


let count = 1
for(let rows = 1; rows <= n; rows++)
{
    let str = ""

    for(let stars = 1; stars <= n; stars++)
    {
        // str += String.fromCharCode(64 + rows)
        // str += String.fromCharCode(64 + stars)
        str += String.fromCharCode(64 + count) + " "
        count++
    }
    
    console.log(str)
}

