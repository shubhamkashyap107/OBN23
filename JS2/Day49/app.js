function findNthFibo(n)
{

    if(n == 1)
    {
        return 0
    }

    if(n == 2)
    {
        return 1
    }

    let first = 0
    let second = 1

    while(n > 2)
    {
        let curr = first + second
        
        first = second
        second = curr

        n--
    }

    return second


}

// console.log(findNthFibo(6))
let count = 0
let map = new Map()

function fibo(n)
{
    if(map.has(n))
    {   
        return map.get(n)
    }   
        count++
    if(n == 1)
    {
        return 0
    }
    if(n == 2)
    {
        return 1
    }

    let ans =  fibo(n - 1) + fibo(n - 2)
    map.set(n, ans)
    return ans
}

// console.log(fibo(1000))
// console.log(count)



function ss(arr, ans, i)
{
    if(i == arr.length)
    {
        console.log(ans)
        return
    }

    ans.push(arr[i])
    ss(arr, ans, i + 1)
    ans.pop()

    ss(arr, ans, i + 1)

}

function ss2(str, ans, i)
{
    if(i == str.length)
    {
        console.log(ans)
        return
    }

    let temp = ans + str[i]
    ss2(str, temp, i + 1),

    ss2(str, ans, i + 1)

}



ss([1,2,3], [], 0)
ss2("abc", "", 0)