let a1 = [1,4,7,99,101,999]
let a2 = [2,3,5,6,7,8]

let ans = []

let i = 0;
let j = 0

while(i < a1.length && j < a2.length)
{
    if(a1[i] < a2[j])
    {
        ans.push(a1[i])
        i++
    }
    else
    {
        ans.push(a2[j])
        j++
    }
}


while(i < a1.length)
{
    ans.push(a1[i])
    i++
}

while(j < a2.length)
{
    ans.push(a2[j])
    j++
}

console.log(ans)