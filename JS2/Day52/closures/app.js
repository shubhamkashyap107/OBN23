function parent()
{
    // const age = 32
    
    return () => {
        console.log(age)
    }
}


const returnedFn = parent()
returnedFn()

