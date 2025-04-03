let a = [2,5,3,7]

let newArr = a.map((e)=>{
    return e**2
})

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newArr.push(element**2)
// }


console.log(newArr) 

const greterThanThree = (e) =>{
    if(e>3){
        return true
    }
    return false
}
console.log(a.filter(greterThanThree))

let arr = [1,2,3,4,5,6]
const red = (a,b) => {
    return a*b
}
console.log(arr.reduce(red))