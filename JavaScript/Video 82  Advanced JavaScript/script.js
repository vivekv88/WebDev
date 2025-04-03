async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// (async function () {
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })();

// code written above is for IIFE

// From here the code is for Destructuring

// let [x,y] = [1,5]
// console.log(x,y)
// let [a,b,...rest] = [1,5,7,8,9,10]
// console.log(a,b,rest)

let obj = {
    a:1,
    b:3,
    c:4
}
let {a,b} = obj
console.log(a,b)


// from here spread operator code
function sum(a,b,c){
    return (a+b+c)
}

let arr = [1,3,7]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))