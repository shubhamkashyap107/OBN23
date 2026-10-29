

function counter()
{
    let count = 0

    return {
        inc : () => {
            count++
            console.log(count)
        },
        dec : () => {
            count--
            console.log(count)
        },
        res : () => {
            count = 0
            console.log(count)
        }
    }


    // if(operation == "inc")
    // {
    //     return () => {
    //         count++
    //         console.log(count)
    //     }
    // }
    // else if(operation == "dec")
    // {
    //     return () => {
    //         count--
    //         console.log(count)
    //     }
    // }
    // else if(operation == "res")
    // {
    //     return () => {
    //         count = 0
    //         console.log(count)
    //     }
    // }
}


const counterObj = counter()


// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.inc()

// counterObj.dec()
// counterObj.dec()
// counterObj.dec()


// counterObj.res()

// counterObj.inc()





function bankAccount(bal, userPin)
{
    let balance = bal
    const pin = userPin

    return {
        checkBalance : () => {
            console.log(balance)
        },
        deposit : (amount) => {
            balance += amount
            console.log(`Total Balance : ${balance}`)
        },
        withdraw : (enteredPin, amount) => {
            if(pin != enteredPin)
            {
                console.log("Invalid PIN")
                return
            }

            if(amount > balance)
            {
                console.log("Invalid amount, balance is", balance)
                return
            }

            balance -= amount
            console.log(balance)
        }
    }
}



const bankAccObj = bankAccount(999, 1234)

bankAccObj.checkBalance()
bankAccObj.deposit(1000)
bankAccObj.withdraw(1234, 1000)