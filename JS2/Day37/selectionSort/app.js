let arr = [7,3,0,-3,-7]

for(let i = 0; i < arr.length - 1; i++)
{
    let minIdx = i

    for(let j = i; j < arr.length; j++)
    {
        if(arr[j] < arr[minIdx])
        {
            minIdx = j
        }
    }

    if(minIdx != i)
    {
        let temp = arr[minIdx]
        arr[minIdx] = arr[i]
        arr[i] = temp
    }
   
}

console.log(arr)