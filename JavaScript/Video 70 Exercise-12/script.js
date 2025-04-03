console.log("Vivekwa Re")

document.querySelectorAll(".box").forEach(e => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    let bg = "rgb(" + a + "," + b + "," + c + ")"
    
    e.style.backgroundColor = bg;
})

document.querySelectorAll(".box").forEach(e => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    let bg = "rgb(" + a + "," + b + "," + c + ")"
    
    e.style.color = bg;
})