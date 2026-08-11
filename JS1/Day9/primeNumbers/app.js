var n = 10000
var i = 2
var isPrime = true

// while(i < n)
// while(i < n / 2)
while(i * i < n)
{
    console.log("Loop Chala")
    if(n % i == 0)
    {
        isPrime = false
    }
    i++
}

console.log(isPrime)

