var day = 5 // 1 -> 7

switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break

    case 4:
        console.log("Thursday")
        break

    case 5:
        console.log("Friday")
        break
       

    case 6:
        console.log("Saturday")
        break

    case 7:
        console.log("Sunday")
        break
    
    default:
        console.log("Invalid Input")

}


var month = 1

switch(month)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30)
        break
    case 2:
        console.log("28/29")
        break
    default:
        console.log("Invalid Input")
}

// var n = 0

// switch(true)
// {
//     case n == 0:
//         console.log("Zero")
//         break

//     case n < 0:
//         console.log("-ve")
//         break

//     default:
//         console.log("+ve")
// }

// switch(n % 2 == 0)
// {
//     case true:
//         console.log("Even")
//         break

//     case false:
//         console.log("Odd")
// }




var n = 0

switch(true)
{
    case n == 0:
        console.log("Zero")
        break
    case n < 0:
        switch(n % 2 == 0)
        {
            case true:
                console.log("-ve, Even")
                break

            default:
                console.log("-ve, Odd")

        }
        break

    default:
        switch(n % 2 == 0)
        {
            case true:
                console.log("+ve, Even")
                break
            
            default:
                console.log("+ve, Odd")
        }

}