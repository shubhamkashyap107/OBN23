let arr = [10,1,4,7,2,-2,0] // n ** 2
// let arr = [2,1,3,4,5,6,7] // n ** 2


for(let i = 0; i < arr.length - 1; i++)
{
    let isSwapped = false
    for(let j = i + 1; j > 0; j--)
    {
        console.log("Loop")
        if(arr[j - 1] > arr[j])
        {
            isSwapped = true
            let temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
        }

        if(isSwapped == false)
        {
            break
        }
    }

}


console.log(arr)