const fs = require("fs")

// console.log(fs)

console.log("Starting")
// fs.writeFileSync("Vivek.txt","Vivek is a bad boy")
fs.writeFile("Vivek2.txt","Vivek is a bad boy2",()=>{
    console.log("Done")
    fs.readFile("Vivek2.txt",(error,data)=>{
        console.log(error,data.toString())
    })    
})

fs.appendFile("Vivek.txt","VivekRobo",(e,d)=>{
    console.log(d)
})
console.log("Ending")