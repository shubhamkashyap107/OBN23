// let start = 11
// let end = 25

// print tables in range
// n -> 11,12,13, ..., 24,25
// for(let n = start; n <= end; n++) // 11 -> 12 -> 13
// {
//     for(let i = 1; i <= 10; i++)
//     {
//         console.log(`${n} * ${i} = ${n * i}`)
//     }
// }



// prime numbers in range
let start = 5
let end = 100

for(let n = start; n <= end; n++)
{

    let isPrime = true

    for(let i = 2; i <= Math.sqrt(n); i++)
    {
       if(n % i == 0)
       {
        isPrime = false
        break
       }
    }


    if(isPrime)
    {
        console.log(`${n} is a prime number`)
    }
    else{
        console.log(`${n} is not a prime number`)
    }

}