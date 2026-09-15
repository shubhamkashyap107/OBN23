function printBoundaryCLockwise(arr)
{
    for(let i = 0; i < arr[0].length; i++)
    {
        console.log(arr[0][i])
    }

    for(let i = 1; i < arr.length; i++)
    {
        console.log(arr[i][arr[0].length - 1])
    }
    
    for(let i = arr[0].length - 2; i >= 0; i--)
    {
        console.log(arr[arr.length - 1][i])
    }

    for(let i = arr.length - 2; i >= 1; i--)
    {
        console.log(arr[i][0])
    }
}



// printBoundaryCLockwise([
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16],
// ])


var spiralOrder = function(arr) {
    let top = 0
    let bottom = arr.length - 1
    let left = 0
    let right = arr[0].length - 1
    let ans = []


    while(left <= right && top <= bottom)
    {

    
        for(let i = left; i <= right; i++)
        {
            ans.push(arr[top][i])   
        }
        top++

  
        for(let i = top; i <= bottom; i++)
        {
            ans.push(arr[i][right])
        }     
        right--


        if(left <= right && top <= bottom)
        {
            for(let i = right; i >= left; i--)
            {
                ans.push(arr[bottom][i])
            }
        }
        bottom--


        if(left <= right && top <= bottom)
        {
            for(let i = bottom;i >= top; i--)
            {
                ans.push(arr[i][left])
            }
        }
        left++

    }

    return ans

};



console.log(spiralOrder([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]

])) // 1,2,3,4,8,12,11,10,9,5