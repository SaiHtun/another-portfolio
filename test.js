const throttle = (fn, wait) => {
    let time = new Date()
    return () => {
        fn()
    }
}

const sayHaha = () => {
    console.log("haha")
}   


throttle(sayHaha)()
// let fn = throttle(sayHaha);
// console.log(fn)