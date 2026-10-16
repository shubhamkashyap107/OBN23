let str = "Shubham"


// for(let i = 1; i <= n; i++)
// {
//     console.log(str)
// }


// for(let i = 5; i > 0; i--)
// {
//     console.log(str)
// }



// function myFirstRecFn(start, end)
// {

//     if(start > end)
//     {
//         return
//     }

//     console.log(str)
//     myFirstRecFn(start + 1, end)
// }

// function mySecondRecFn(n)
// {

//     if(n == 0)
//     {
//         return
//     }

//     console.log(str)
//     mySecondRecFn(n - 1)

// }



// // myFirstRecFn(1, 5)
// mySecondRecFn(5)



// function print(i, n)
// {
//     if(i > n)
//     {
//         return
//     }


//     console.log(i)
//     print(i + 1, n)
//     console.log(i)
// }

// print(1, 4)









function sum(i, n, ans)
{

    if(i > n)
    {
        return ans
    }


    ans += i
    return sum(i + 1, n, ans)

}




console.log(sum(1, 3, 0))









