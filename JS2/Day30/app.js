function lastOccurence(arr, x) // [1,2,3,4,4,4,6,7,8,8,8,9,10] -> return last occurence of x
{
    let s = 0
    let e = arr.length - 1

    while(s < e)
    {
        let mid = Math.floor((s + e) / 2)

        if(arr[mid] == x)
        {
            s = mid
        }
        else
        {
            e = mid - 1
        }
    }

    return s
}


console.log(lastOccurence([1,2,3,4,4,4,6,7,8,8,8,9,10], 8))