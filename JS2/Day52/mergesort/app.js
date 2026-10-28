function mergeSortedArrays(a, b)
{
    let ans = []

    let i = 0
    let j = 0

    while(i < a.length && j < b.length)
    {
        if(a[i] <= b[j])
        {
            ans.push(a[i])
            i++
        }
        else
        {
            ans.push(b[j])
            j++
        }

    }


    while(i < a.length)
    {
        ans.push(a[i])
        i++
    }

    while(j < b.length)
    {
        ans.push(b[j])
        j++
    }
    return ans
}

function mergesort(arr)
{
    if(arr.length == 0 || arr.length == 1)
    {
        return arr
    }

    let mid = Math.floor(arr.length / 2)

    let sortedLeft = mergesort(arr.slice(0, mid ))
    let SortedRight = mergesort(arr.slice(mid))


    return mergeSortedArrays(sortedLeft, SortedRight)

}


console.log(mergesort([9,7,5,4,2,1,0]))