class User{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name ;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("John")

//this call will goes to getter
console.log(user.name)


// calling setter
console.log(user.name="")  //use this or use next line
user.name = ""