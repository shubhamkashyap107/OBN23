const outer = () => {
    console.log("OK")

    return () => {
        console.log("Hello")
    }
}


const demo = (fn) => {
    console.log("OK")
    fn()
}











