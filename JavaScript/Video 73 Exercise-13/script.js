function createCard(title, channel, views, howOld, thumbnail, duration){
    let viewNumber
    if(views < 1000000){
        viewNumber = views/1000 + "K"
    }
    else if(views > 1000000){
        viewNumber = views/1000000 + "M"
    }
    else{
        viewNumber = views/1000 + "K"
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h2>${title}</h2>
        <p>${channel} . ${viewNumber} . ${howOld}</p>
    </div>

</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Inserting and Removing Elements using JavaScript | Sigma Web Development Course - Tutorial #71","CodeWithHarry", "5670000","1 year ago","https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA","33:18")