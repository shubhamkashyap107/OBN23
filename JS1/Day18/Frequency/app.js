// let arr = [1,2,3,4,1,2,3,1,2,1]
// let obj = {}


// for(let item of arr)
// {
//     obj[item] = obj[item] + 1 || 1
// }


// for(let item of arr)
// {
//     if(obj[item])
//     {
//         // obj[item]++
//         obj[item] = obj[item] + 1
//     }
//     else
//     {
//         obj[item] = 1
//     }
// }


// console.log(obj)



// let str = "abcdabcaba"
// let obj = {}

// for(let item of str)
// {
//     if(obj[item])
//     {
//         obj[item] = obj[item] + 1

//     }
//     else
//     {
//         obj[item] = 1
//     }
// }

// console.log(obj)


// The returned object should contain:

// topper — The name of the student who scored the highest marks.
// passedStudents — An array containing the names of students who scored 70 or more.
// youngestStudent — The name of the youngest student.
// averageMarks — The average marks scored by all students.
// totalStudents — The total number of students.


const students = [
  { name: "Aman", marks: 85, age: 20 },
  { name: "Riya", marks: 92, age: 19 },
  { name: "Karan", marks: 67, age: 21 },
  { name: "Neha", marks: 78, age: 20 },
  { name: "Rohit", marks: 92, age: 22 }
];



function solve(arr)
{
    let sum = 0
    let passed = []
    let topper = arr[0]
    let youngest = arr[0]


    for(let item of arr)
    {
        sum += item.marks

        if(item.marks > 70){
            passed.push(item.name)
        }

        if(item.age < youngest.age)
        {
            youngest = item
        }

        if(item.marks > topper.marks)
        {
            topper = item
        }

    }


    return {
        averageMarks : sum / arr.length,
        youngest : youngest.name,
        passed,
        topper : topper.name,
        totalStudents : arr.length

    }

}


console.log(solve(students))