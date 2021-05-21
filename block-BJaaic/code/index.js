//ANIMAL
function animal(location,noOfLegs){
    let anime = Object.create(animalmeth);
    anime.location = location;
    anime.noOfLegs = noOfLegs;

    return anime;
}

let animalmeth = {
    eat(){
        return `I live in ${this.location} and I can eat`;
    },
    changeLocation(newLocation){
        this.location = newLocation;
        return `new location : ${this.location}`;
    },
    summary(){
        return `I live in ${this.location} and I have ${this.noOfLegs}`
    },
};
//DOG


function dog(name,color){
    let doggie = Object.create(dogmeth);
    doggie.name = name;
    doggie.color= color;

    return doggie;
}

let dogmeth = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName){
        this.name = newName;
        return `new name : ${this.name}`;
    },
    changeColor(newColor){
        this.color =newColor;
        return `new color : ${this.color}`;
    },
    summary(){
        return `my name is ${this.name} and color is ${this.color}`
    },

};
Object.setPrototypeOf(dogmeth,animalmeth);
//CAT


function cat(name,noOfEyes){
    let cattie = Object.create(catmeth);
    cattie.name= name;
    cattie.noOfEyes = noOfEyes;

    return cattie;
}

let catmeth = {
    meow:function(){
        return `I am ${this.name} and I can do mewo meow 😹`;
    },
    changeName:function(newName){
        this.name =newName;
        return `new name : ${this.name}`;
    },
    changeColorOfEyes:function(newColor){
        this.color  =newColor;
        return `new color : ${this.color}`;
    },
    summary:function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};
Object.setPrototypeOf(catmeth,animalmeth)