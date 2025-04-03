let button = document.getElementById("btn")

button.addEventListener("dblclick" ,() => {
    // alert("I am clicked...Yay!!")
    document.querySelector(".box").innerHTML = "<b> Yayy you were Clicked !! </b> Enjoy You Click"
})

button.addEventListener("contextmenu" ,() => {
    alert("Please don't hack us by right click of the mouse")
})

button.addEventListener("keydown" ,(e) => {
    console.log(e.key,e.keyCode)
})