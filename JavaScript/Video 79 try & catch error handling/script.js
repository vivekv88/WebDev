let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

let x = 5;

function kuchbhi() {
    try {
        let c = sum * x
        return c
    } catch (error) {
        return error
    }
    finally {
        console.log("All blocks are executed and no preemption occured")
    }

}
let d = kuchbhi()
console.log(d)

// try {
//     console.log("The sum is ",sum*x)
// } catch (error) {
//     console.log("There is some error inside the code")
// }
// console.log("All blocks are executed and no preemption occured")