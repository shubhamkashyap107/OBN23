
const obj = {
    name : "S",
    age : 26
}


// Object.freeze(obj)
// Object.seal(obj)
Object.preventExtensions(obj)


delete obj.age
obj.name = "D"
obj.city = "Delhi"


console.log(obj)

