function createData(title,options,index=0){
    let data = {};
    data.title = title;
    data.options= options;
    data.correctAnswerIndex = index;
    data.isAnswerCorrect = function (index = 0){
        if(this.correctAnswerIndex === index){
            return true;
        }
        else{
            return false;
        }
    }
    data.getCorrectAnswer = function (index = 0){
        return this.correctAnswerIndex;
    }
    return data;
}
console.log(createData.data);
let user2 = createData.data({
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  });
  console.log(user3.isAnswerCorrect(0));