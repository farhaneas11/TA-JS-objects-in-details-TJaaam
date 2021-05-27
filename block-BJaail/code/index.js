let btitle = document.querySelector('#title');
let bauthor = document.querySelector('#author');
let bisbn = document.querySelector('#isbn');


class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author =author;
        this.isbn =isbn;
        this.id = `id-${Date.now()}`;        
    }
    createUI(){        

        let allBook = document.querySelector('.spanned');  
        let titleN = document.createElement('span');
        let authorN = document.createElement('span');
        let isbnN = document.createElement('span');         

        titleN.innerHTML = this.title;
        authorN.innerHTML = this.author;
        isbnN.innerHTML = this.isbn;

        let deleteN = document.createElement('span');
        deleteN.innerHTML = "X";
        

        allBook.append(titleN,authorN,isbnN,deleteN);
        return allBook;
    }
    
}
class BookList{
    constructor(root , list = []){
        this.booklist = list;
        this.root =root;
    }
    add(addtitle ,addauthor ,addisbn){
        let book = new Book(addtitle ,addauthor ,addisbn);
        this.booklist.push(book);
        this.createUI();
        return this.booklist.length;
    }
    delete(id){
        let index = this.booklist.findIndex((book)=>
        book.id === id);
        this.booklist.splice(index,1);
        this.createUI();
        return this.booklist.length; 
    }
    createUI(){
        this.root.innerHTML = "";
        this.booklist.forEach((book) => 
        this.root.append(book.createUI()));
    }    
}

let list = new BookList(document.querySelector('.spanned'));

let button = document.querySelector('.btn');
function handleSubmit(event){
    event.preventDefault();
    const title = btitle.value;
    const author = bauthor.value;
    const isbn = bisbn.value;
    list.add(title , author , isbn);

    btitle.value ="";
    bauthor.value ="";
    isbn.value ="";
}

button.addEventListener('click',handleSubmit);

