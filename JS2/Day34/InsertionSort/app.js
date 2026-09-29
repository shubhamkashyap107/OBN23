const arr = [6,1,2,3,4,5]


function insertionSort(arr)
{
    for(let i = 0; i < arr.length - 1; i++)
    {
        
        for(let j = i + 1; j > 0; j--)
        {
            let isSwapped = false
            console.log("Loop Chala")

            if(arr[j] < arr[j - 1])
            {
                isSwapped = true
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }

            if(isSwapped == false)
            {
                break
            }
        }
    }
    console.log(arr)
}

insertionSort(arr)


