let count = 0
function quickSort(arr)
{
  
    if(arr.length == 0 || arr.length == 1)
    {
        return arr
    }
    let pivotIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[pivotIndex]

    let left = []
    let right = []
    
    for(let i = 0; i < arr.length ; i++)
    {
        if(i == pivotIndex)
        {
            continue
        }
        count++
        if(arr[i] < pivot)
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])
        }
    }
    let sortedLeft = quickSort(left)
    let sortedRight = quickSort(right)

    return [...sortedLeft, pivot, ...sortedRight]
}

console.log(quickSort([-9,1,7,2,6,5]))
console.log(count)