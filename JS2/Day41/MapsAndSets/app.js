// let obj = {}

// obj.key1 = "val1"
// obj.key1 = "xyz"

// console.log(obj["key1"])
// console.log(obj)



// let map = new Map()

// map.set("k1", "v1")
// map.set("k1", "abc")
// console.log(map.get("k1"))

// console.log(map)




let obj = {
    age : 0,
    name : "",
    isPresent : false
}

// console.log(obj.hasOwnProperty("city"))

// // if(obj.age)
// if(obj.isPresent)
// {
//     console.log("Student aaya hai")
// }





// const map = new Map()

// map.set("k1", 0)
// map.set("k2", true)


// // console.log(map)


// if(map.has("k1"))
// {
//     console.log("Key hai")
// }


// get -> val, set, has -> boolean

let map = new Map()
// let arr = [1,2,3,4,5,6]
// let obj = {}


map.set("k1", "v1")
map.set("k2", "v2")
map.set("k3", "v3")
map.set("k4", "v4")


// map.clear()
// map.delete("k3")

// for(let [key, value] of map)
// {
//     console.log(key)
// }

// map.forEach((v,k) => {
//     console.log(v,k)
// })

// console.log(map.entries())
// let tempArr = map.entries()


// for(let item of tempArr)
// {
//     console.log(item)
// }

// for(let item of map.entries())
// {
//     console.log(item)
// }


// for(let item of map.keys())
// {
//     console.log(item)
// }

// for(let item of map.values())
// {
//     console.log(item)
// }






// console.log(map)









// let map = new Map()

// map.set("k1", "v1")
// map.set("k2", "v2")
// map.set("k3", "v3")
// map.set("k4", "v4")








// let set = new Set()


// let arr = [1,2,3,4,1,2,3]

// set.add(1)
// set.add(true)
// set.add("qwerty")


// console.log(set.has("qwerty"))

// console.log(set.entries()) 

// set.forEach((item) => {
//     console.log(item)
// })


// for(let item of set)
// {
//     console.log(item)
// }


// set.delete(true)
// set.clear()



// console.log(set)





// let arr = [1,2,3,4,1,2,3,1,2,1]
// let set = new Set()




// for(let item of arr)
// {
//     set.add(item)
// }


// console.log([...set])

// let ans = []

// for(let item of set)
// {
//     ans.push(item)
// }


// console.log(ans)


// let ans = Array.from(map.keys())
// console.log(ans)


let arr = [1,2,3,4,1,2,3,1,2,1]

// let set = new Set(arr)

// console.log(Array.from(set))

console.log(Array.from(new Set(arr)))