var arr = [1,2,3,4,5]

arr.forEach(function(val){
    //console.log(val + " hello")
})

var newArr = arr.map(function(val){
    return val;
})

//console.log(newArr)

var ans = arr.filter(function(val){
    if(val >= 3){
        return true;
    }else{
        return false;
    }
})
//console.log(ans)

var answer = arr.find(function(val){
    if(val === 2) return val;
})
//console.log(answer)

var obj = {
    name : "Vivek",
    age: 22,
    class : "B.tech"
}

Object.freeze(obj);

obj.age = 25;

async function abcd(){
    var blob = await fetch(`https://example.org/products.json`)
    var ans = blob.json();
    console.log(ans);
}

abcd();