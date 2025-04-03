console.log("Vivek is a developer")
console.log("Pathak is a Hacker")

setTimeout(() => {
    console.log("Anand is Finanace Minister")
}, 2000);

setTimeout(() => {
    console.log("Avnish is programmer")
}, 2000);

console.log("Sheelu is CA")

const callback = (arg) => {
  console.log(arg)
}


const loadScript = (src, callback) => {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => callback("Vivek")
  document.head.append(script)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)