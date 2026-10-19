let n = 29

function check(n, i)
{
    if(n < 2)
    {
        return false
    }
    if(i * i > n)
    {
        return true
    }
    return n % i != 0 && check(n, i + 1)
}
function checkPrimeInRange(s, e)
{
    if(s > e)
    {
        return
    }

    let boolean = check(s, 2)
    if(boolean)
    {
        console.log(s)
    }

    checkPrimeInRange(s + 1, e)
}


checkPrimeInRange(2, 8)