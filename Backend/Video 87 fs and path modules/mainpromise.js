import fs from "fs/promises"

let a = await fs.readFile("Vivek.txt")
let b = await fs.appendFile("Vivek.txt","\n\n\n\n\n\n This is very cool")
console.log(a.toString(),b)