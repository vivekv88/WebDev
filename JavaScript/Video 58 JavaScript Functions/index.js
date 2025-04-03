function nice(name) {
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name + " you are good!")
    console.log("Hey "+ name + " your tshirt is beautiful!")
    console.log("Hey "+ name + " your coding skills are also good!")
}

function sum(a,b,c=4) {
    return a+b+c;
}

result1 = sum(4,2,8)
result2 = sum(6,2)
result3 = sum(4,9)

console.log("Sum of numbers is: ",result1)
console.log("Sum of numbers is: ",result2)
console.log("Sum of numbers is: ",result3)

nice("Vivek")
console.log()

// Arrow Function
const func1 = (x) => {
    console.log("I am an arrow function: ",x)
}

func1(32)
func1(90)
func1(44)