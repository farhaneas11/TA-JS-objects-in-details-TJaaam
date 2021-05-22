//ANIMAL -- PROTOTYPICAL
function Animal(location,noOfLegs){
    
    this.location = location;
    this.noOfLegs = noOfLegs;
}

Animal.prototype= {
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


function Dog(name,color){    
    Animal.apply(this,[name]);  
    this.color= color;    
}

Dog.prototype.Animal = {
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
Object.setPrototypeOf(Dog.prototype,Animal.prototype);
//CAT


function Cat(name,colorOfEyes){
    Animal.apply(this,[name]);    
    this.colorOfEyes = colorOfEyes;

    
}

Cat.prototype.Animal = {
    meow:function(){
        return `I am ${this.name} and I can do mewo meow 😹`;
    },
    changeName:function(newName){
        this.name =newName;
        return `new name : ${this.name}`;
    },
    changeColorOfEyes:function(newColor){
        this.colorOfEyes  =newColor;
        return `new color : ${this.colorOfEyes}`;
    },
    summary:function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};
Object.setPrototypeOf(Cat.prototype,Animal.prototype);
//ANIMAL -- CLASS
class animal{
    constructor(location,noOfLegs){    
    this.location = location;
    this.noOfLegs = noOfLegs;    
    }
    eat(){
        return `I live in ${this.location} and I can eat`;
    }
    changeLocation(newLocation){
        this.location = newLocation;
        return `new location : ${this.location}`;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.noOfLegs}`
    }
}


//DOG


class dog extends animal{
    constructor(name,color){        
    this.name = name;
    this.color= color;
    } 
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }  
    changeName(newName){
        this.name = newName;
        return `new name : ${this.name}`;
    } 
    changeColor(newColor){
        this.color =newColor;
        return `new color : ${this.color}`;
    }
    summary(){
        return `my name is ${this.name} and color is ${this.color}`
    }
}



//CAT


class cat extends animal{
    constructor(name,colorOfEyes){        
    this.name= name;
    this.colorOfEyes = colorOfEyes;    
    }
    meow(){
        return `I am ${this.name} and I can do mewo meow 😹`;
    }
    changeName(newName){
        this.name =newName;
        return `new name : ${this.name}`;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes  =newColor;
        return `new color : ${this.colorOfEyes}`;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}


