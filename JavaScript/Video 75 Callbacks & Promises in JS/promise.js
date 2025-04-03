console.log('Harry');
console.log('Chandu');

let prom1 = new Promise ((resolve,reject) => {
    let x = Math.random()
    if(x < 0.5){
        reject("No random number is not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("Vivek Bhai Don")
            resolve("Done Harry Bhai")
        }, 3000);
    }
})

let prom2 = new Promise ((resolve,reject) => {
    let x = Math.random()
    if(x < 0.5){
        reject("No random number is not supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log("Vivek Bhai Don 2")
            resolve("Done Harry Bhai 2")
        }, 1000);
    }
})

// let p3 = Promise.all([prom1,prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch(err=>{
//     console.log(err) 
// })

// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch(err=>{
//     console.log(err) 
// })

// let p3 = Promise.race([prom1,prom2])     ye saare promises ke bich mei race lgayega kon sa fast execute ho rha ye bta dega
// p3.then((a) => {
//     console.log(a)
// }).catch(err=>{
//     console.log(err) 
// })

// let p3 = Promise.any([prom1,prom2])   
// p3.then((a) => {
//     console.log(a)
// }).catch(err=>{
//     console.log(err) 
// })

// let p3 = Promise.resolve([prom1,prom2])   
// p3.then((a) => {
//     console.log(a)
// }).catch(err=>{
//     console.log(err) 
// })

let p3 = Promise.reject([prom1,prom2])   
p3.then((a) => {
    console.log(a)
}).catch(err=>{
    console.log(err) 
})