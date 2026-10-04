let arr = [1,2,3,4,5]

for(let i = 0; i < arr.length - 1; i++)
{
    let isSorted = true

    for(let j = 0; j < arr.length - 1 - i; j++)
    {
        console.log("Loop")
        if(arr[j] < arr[j + 1])
        {
            isSorted = false
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }

    if(isSorted)
    {
        break
    }
}

console.log(arr)