let arr = [1,2,3,4,5,6,7,8,9,10]


function bs(arr, t) // logn
{
    let s = 0
    let e = arr.length - 1

    while(s <= e)
    {
        console.log("Loop chala")

        // let mid = Math.floor((s + e) / 2)
        let mid =Math.floor (s + ((e - s) / 2))

        if(arr[mid] == t)
        {
            return mid
        }
        else if(t < arr[mid])
        {
            e = mid - 1
        }
        else
        {
            s = mid + 1
        }
    }
    return -1
}


console.log(bs(arr, 10))