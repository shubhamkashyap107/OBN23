// console.log(age)

// /*

// CODE

// */


// let age = 100

// var a = 10;

// function test() {
//     console.log(a);
//     // var a = 20;
// }

// test();

// function test() {
//     console.log(a);
//     let a = 10;
// }

// test();


// console.log(typeof a);

// let a = 10;


// var a = 1;

// function test() {
//     var a = 2;

//     if (true) {
//         var a = 3;
//         console.log(a);
//     }

//     console.log(a);
// }

// test();
// console.log(a);


// console.log(foo);


// function foo() {
//     return 20;
// }


// var foo = 10;


// console.log(foo());

// var foo = function () {
//     return "A";
// };

// function foo() {
//     return "B";
// }

// function test() {
//     console.log(a);

//     if (true) {
//         var a = 100;
//     }
// }

// test();

// function test() {
//     console.log(a);

//     if (true) {
//         var a = 100;
//     }
// }

// test();


var x = 10;

function outer() {
    var x = 20;

    function inner() {
        console.log(x);
        var x = 30;
    }

    inner();
}

outer();