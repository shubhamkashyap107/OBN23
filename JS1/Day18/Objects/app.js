const obj = {
    name : "S",
    age : 21,
    number : 6543234567,
    city : "Delhi",
    country : "India"
}

// for(let item of Object.keys(obj))
// {
//     console.log(item)
// }

// for(let item of Object.values(obj))
// {
//     console.log(item)
// }

for(let [k,v] of Object.entries(obj))
{
    console.log(k,v)
}





const keys = Object.keys(obj)
const values = Object.values(obj)
// const entries = Object.entries(obj) // [[], [], [k,v]]

console.log(keys)
console.log(values)
// console.log(entries)

// for(let item of keys)
// {
//     console.log(item)
// }

// for(let item of values)
// {
//     console.log(item)
// }

// for(let item of entries)
// {
//     console.log(item[0], item[1])
// }


// for(let [k,v] of entries)
// {
//     console.log(k,v)
// }
