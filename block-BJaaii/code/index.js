
class Stack{
    constructor(stack , lengthOf){
        this.stack = stack;   
        this.lengthOf = lengthOf;     
    }
    push(value){        
        if(this.stack.length < this.lengthOf){
            this.stack.push(value);
            return this.stack;
        }      
        else{
            return 'full';
        }  
    }
    pop(){
        if(this.stack.length <= 0){
            return 'empty';
        }
        else{
            this.stack.pop(this.stack[this.stack.length - 1]);
            return this.stack;;
        }
    }
    peek(index = this.stac[length - 1]){
        return this.stack[index];
    }
    reverse(){        
        return this.stack.reverse();
    }
    isEmpty(){
        if(this.stack.length <= 0){
            return true;
        }
        else{
            return false;
        }
    }
    displayStack(){
        return this.stack;
    }
}




class Queue{
    constructor(queue,lengthOf){
        this.queue = queue;
        this.lengthOf = lengthOf;
    }
    push(value){   
        let len = this.queue.length - 1;     
        if(this.queue.length < this.lengthOf){
            this.queue.push(value);
            return this.queue;
        }      
        else{
            return 'full';
        }  
    }
    pop(){
        if(this.queue.length <= 0){
            return 'empty';
        }
        else{
            this.queue.pop(this.stack[0]);
            return this.queue;;
        }
    }
    peek(index = this.queue[length - 1]){
        return this.queue[index];
    }
    reverse(){        
        return this.queue.reverse();
    }
    isEmpty(){
        if(this.queue.length <= 0){
            return true;
        }
        else{
            return false;
        }
    }
    displayQueue(){
        return this.queue.join('');
    }
    displayLength(){
        return this.queue.length;
    }
}





