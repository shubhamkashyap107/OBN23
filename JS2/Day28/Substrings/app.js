// let str = "abcd"
// let ans = []


// for(let i = 0; i < str.length; i++)
// {
//     let temp = "" // ab

//     for(let j = i; j < str.length; j++)
//     {
//         temp += str[j]
//         ans.push(temp)
//     }

// }

// console.log(ans)




function countTotalSubstrings(str) // return count
{
    // let ans = []


    // for(let i = 0; i < str.length; i++)
    // {
    //     let temp = "" // ab

    //     for(let j = i; j < str.length; j++)
    //     {
    //         temp += str[j]
    //         ans.push(temp)
    //     }

    // }


    // return ans.length

    let n = str.length
    return (n * (n + 1)) / 2
}



function substringOfLengthK(str, k)
{
    let ans = []


    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {
            console.log("Loop chala")
            let ss = str.slice(i, j + 1)

            if(ss.length == k)
            {
                ans.push(ss)
            }
        }
    }


    return ans
}


function substringOfLengthKOneLoop(str, k)
{
    let ans = []
    let count = 0

    for(let i = 0; i <= str.length - k; i++)
    {
        // console.log("Loop chala")
        // ans.push(str.slice(i, i + k))
        count++
    }

    // return ans.length
    return count

    // return str.length - k + 1

}

// console.log(substringOfLengthKOneLoop("abcdefgh", 3))
// console.log(substringOfLengthK("abcdefhij", 3))
// console.log(countTotalSubstrings("abcd"))
// console.log(printAllSubstringsStartingFromK("abcde", 2))



function printAllSubstringsStartingFromK(str, k)
{
    let ans = []

    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {
            ans.push(str.slice(i, j + 1))
        }
    }

    return ans
}



function printAllSubstringsWhichContainsVowels(str)
{
    let ans = []

    for(let i = 0; i < str.length; i++)
    {
        for(let j = i; j < str.length; j++)
        {

            for(let k = i; k <= j; k++)
            {
                if(str[k] == "a" || str[k] == "e" || str[k] == "i" || str[k] == "o" || str[k] == "u")
                {
                    ans.push(str.slice(i, j + 1))
                    break
                }
            }
            

        }
    }
    return ans
}



// console.log(printAllSubstringsWhichContainsVowels("hello"))



function printALlPalindromicSS(str)
{

}


function printAllSSWithOnlyVowels(str)
{

}


function printLargestSSCOntainingOnlyVowels(str) // hello // acciojob
{

}

function findAllSubstringContainingTargetkTimes(str, target, k) // "abcaabca", "a", 2
{

}