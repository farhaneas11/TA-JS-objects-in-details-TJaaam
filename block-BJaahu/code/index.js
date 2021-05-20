let methods = {
    isAnswerCorrect : function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer : function(index){
        return this.options[correctAnswerIndex];
    }
};

createUser.prototype =  {
    isAnswerCorrect : function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer : function(index){
        return this.options[correctAnswerIndex];
    }
};
function createUser(title,options,correctAnswerIndex){
    let user = object.create(createUser.prototype);//createUser.prototype
    user.title =title;
    user.options = options;
    user.correctAnswerIndex = correctAnswerIndex;

    return user;
}

function createUser(title,options,correctAnswerIndex){
    let user = object.create(methods);
    user.title =title;
    user.options = options;
    user.correctAnswerIndex = correctAnswerIndex;

    return user;
}

function createUser(title,options,correctAnswerIndex){
    this.title =title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;    
}

class user {
    constructor(title,options,correctAnswerIndex){
        this.title =title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;   
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[correctAnswerIndex];
    }
}

let firstQuestion = new createUser(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let user1 = createUser('Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1);
  let user2 = new createUser('Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1);