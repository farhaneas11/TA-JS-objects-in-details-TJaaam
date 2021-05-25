class Book{
    constructor(title,category,author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead =false;
        this.finishedDate = null;        
    }
    markBookAsRead(){        
        let datenew = Date(Date.now());
        let current = datenew.toString();
        this.isRead = true;
        return this.finishedDate = current;    
        this.finishedDate = current;    
    }    
}


class BookList{
    constructor(){        
        this.books = [];
        this.currentindex = 0;       
    }
    add(books = []){       
        this.books = this.books.concat(books); 
        return this.books;
    }
    getCurrentBook(index){
        return this.books[this.currentindex];
    }
    getNextBook(){
        this.currentindex = this.currentindex + 1;
        return this.books[this.currentindex];
    }
    getPrevBook(){
        this.currentindex = this.currentindex - 1;
        return this.books[this.currentindex];
    }
    changeCurrentBook(index){
        this.currentindex = index;
        return this.books[this.currentindex];

    }
}