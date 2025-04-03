console.log("This is JavaScript Tutorial on Loops")

/*
for (let i = 1; i <= 100; i++) {
    console.log(i);
    
}
*/

let obj = {
    "name" : "Vivek",
    "Department": "CSE",
    "Table No." : 25,
}

// This is forin loop used for object
for (const key in obj) {
    console.log(key)
    console.log(key,obj)
}

for (const c of "Vivek") {
    console.log(c)
}