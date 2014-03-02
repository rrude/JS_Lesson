var Book = function(bookTitle, genre, author, read, readDate){
    this.bookTitle = bookTitle || "untitled";
    this.genre = genre || "ungenre";
    this.author = author || "anonymous";
    this.read = read || false;
    this.readDate = new Date(readDate) || '';
}

var BookList = function(booksRead, notRead, bookShelf) {
    this.booksRead = booksRead || 0;
    this.notRead = notRead || 0;
    this.bookShelf = bookShelf || [];
    this.currentBookIndex = 0;
    this.nextBookIndex = 0;
    
    this.getCurrentBook = function(){
       return this.bookShelf[this.currentBookIndex];
    }
    this.getNextBook = function(){
        // In Py, randInt(len(range()))
        this.currentBookIndex = Math.floor(Math.random() * this.bookShelf.length);
        return this.bookShelf[this.currentBookIndex];
    }
    this.addBook = function(book){
        this.bookShelf.push(book); // adds item to end of array  
    }
    this.finishCurrentBook = function(){
        this.booksRead += 1;
        this.notRead -= 1;
        this.getCurrentBook().read = true;
        this.getCurrentBook().readDate = new Date();
        var unreadList = []
        for (i = 0; i < this.bookShelf.length; i++){
            book = this.bookShelf[i];
            if (book.read == false){
                unreadList.push(i);
            }
        }
        var n = Math.floor(Math.random() * unreadList.length);
        this.currentBookIndex = unreadList[n];
    }
}

var BookBoss = function(BookList, Book){
    BookList.addBook(Book);
}

var book1 = new Book("War and Peace", "Fiction", "Leo Tolstoy", true, '3/2/14');
var book2 = new Book("Anna Karenina", "Fiction", "Leo Tolstoy", false);
var book3 = new Book("Angela's Ashes", "Memoir", "Frank McCourt", false);
var book4 = new Book("The Road", "Fiction", "Jack Kerouac", false);

var BookList1 = new BookList();

BookList1.addBook(book1);
BookList1.addBook(book2);
BookList1.addBook(book3);
BookList1.addBook(book4);

BookList1.finishCurrentBook();
console.log(BookList1.getCurrentBook());