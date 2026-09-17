function printSubarray(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let temp = []

        for(let j = i; j < arr.length; j++)
        {
            temp.push(arr[j])
            console.log(temp)
        }

    }
}


function returnAllSubarrays(arr)
{
    let ans = []

    for(let i = 0; i < arr.length; i++)
    {
        let temp = []

        for(let j = i; j < arr.length; j++)
        {
            // let newArr = arr.slice(i, j + 1)
            // ans.push(newArr)

            // temp.push(arr[j])
            // ans.push([...temp])

            // temp.push(arr[j])
            // let str = JSON.stringify(temp)
            // let newStr = JSON.parse(str)
            // ans.push(newStr)

            temp.push(arr[j])
            ans.push(structuredClone(temp))

        }
    }

    return ans

}


function returnAllSubstringNoInbuiltFunctions(arr)
{
    let ans = []
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i; j < arr.length; j++)
        {
           
            let temp = []
            for(let k = i; k <= j; k++)
            {
                temp.push(arr[k])
            }
            ans.push(temp)
        }
    }
    return ans
}



var maxSubArray = function(nums) {
    let max = -Infinity

    for(let i = 0; i < nums.length; i++)
    {
        let sum = 0

        for(let j = i; j < nums.length; j++)
        {
            sum += nums[j]
            max = Math.max(sum, max)
        }
    }


    return max
};

// printSubarray([1,2,3,4,5])
// console.log(returnAllSubarrays([1,2,3,4,5]))
// console.log(returnAllSubstringNoInbuiltFunctions([1,2,3,4,5]))
console.log(maxSubArray([1,2,-3,4,5]))