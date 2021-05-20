//classical way
function createObject(name,id,noOfProjects){
    let obj = {};
    obj.name = name;
    obj.id = id;
    obj.noOfProjects =noOfProjects;
    getProjects = function(){
        return noOfProjects;
    }
    changeName = function(newname){
        this.name = newname;
        return this.name;
    }
    incrementProject = function(value = 1){
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    }
    decrementProject = function(value = 1){
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    }
    return objects;
}
//function to create object
let properties = {
    getProjects : function(){
        return this.noOfProjects;
    },
    changeName: function(newname){
        this.name = newname;
        return this.name;
    },
    incrementProject : function(value = 1){
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject : function(value = 1){
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    },
};

function createObject(name,id,noOfProjects){
    let obj = Object.create(properties);
    obj.name = name;
    obj.id = id;
    obj.noOfProjects =noOfProjects;
    return obj
}


let user1 = createObject('farhan','SCADA' , 2);

//prototype pattern

function createObject(name,id,noOfProjects){
    let obj = Object.create(createObject.prototype);
    obj.name = name;
    obj.id = id;
    obj.noOfProjects =noOfProjects;

    return obj;
}
createObject.prototype = {
    getProjects : function(){
        return this.noOfProjects;
    },
    changeName: function(newname){
        this.name = newname;
        return this.name;
    },
    incrementProject : function(value = 1){
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject : function(value = 1){
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    },
};

let user1 = new createObject('farhan','SCADA' , 2);

//class model

class objects{
    constructor (name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects =noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newname){
        this.name = newname;
        return this.name;
    }
    incrementProject(value = 1){
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    }
    decrementProject(value = 1){
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    }
}

let user4 = new objects('farhan','SCADA' , 2);