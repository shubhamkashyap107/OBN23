let arr = [99,7,1,6,3,5,-10]


for(let i = 0; i < arr.length - 1; i++)
{
    let minIdx = i

    for(let j = i; j < arr.length; j++)
    {
        if(arr[j] < arr[minIdx])
        // if(arr[j] > arr[minIdx])
        {
            minIdx = j
        }
    }

    if(i != minIdx)
    {
        let temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
    }


}

console.log(arr)