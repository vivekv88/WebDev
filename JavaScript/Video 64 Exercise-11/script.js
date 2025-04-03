// let a = prompt("Enter the Number")
// let b = 1
// for(let i=1;i<=a;i++){
//     b=b*i;
// }
// console.log(b)


// Reduce method for finding factorial
let a = 6;
function factorial(number){
    let arr = Array.from(Array(number+1).keys())  // create an array of number from 1 to 6
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}
console.log(factorial(a))