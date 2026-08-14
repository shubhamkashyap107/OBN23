// global scope

var a = 10
let b = 20
const c = 30


/*

    CODE

*/



console.log(a)
console.log(b)
console.log(c)


// block scope conditionals, {}, loop

{
    var a1 = 1
    let b1 = 2
    const c1 = 3


    console.log(a1)
    console.log(b1)
    console.log(c1)
}

// console.log(a1)
// console.log(b1)
// console.log(c1)



// functional scope

function abc()
{
    var a2 = 10
    let b2 = 20
    const c2 = 30

    console.log(a2)
    console.log(b2)
    console.log(c2)
}
abc()

// console.log(a2)
// console.log(b2)
console.log(c2)