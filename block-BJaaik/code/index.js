class Person{
    constructor(name,age,gender){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    eat(){
        return `eated : 3 times`;
    }
    sleep(){
        return `sleep : 8 hours`;
    }
    walk(){
        return `walk : 10k steps`;
    }
}
class Player extends Person{
    constructor(name,age,gender,spsortsName){
        super(name,age,gender);
        this.spsortsName = spsortsName;
        
    }    
    play(){
        return `${this.spsortsName}`;
    }
}

class Cricketer extends Player{
    constructor(name,age,gender,spsortsName,teamName){
        super(name,age,gender,spsortsName);
        this.teamName = teamName;
    }
    playCricket(){
        return `${this.teamName}`;
    }
}

class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(){
        return `${this.instituteName}`;
    }
}

class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind = kind;
    }
    createArt(){
        return `${this.kind}`;
    }
}