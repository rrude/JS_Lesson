// var StarShip = function(designation, registryNumber, crewComplement){
//     this.designation = designation || "Unknown Designation";
//     this.registryNumber = registryNumber || "registryNumber";
//     this.crewComplement = crewComplement || 0;
// }

// var enterprise = new StarShip("Enterprise", "NCC-1701-D", 1014);
// var birdofPrey = new StarShip("IKS Koraga", "K'Vort", "25")

// console.log(birdofPrey);


var Book = function(Title, Genre, Author, Read, readDate){
    this.title = Title || "untitled";
    this.Genre = Genre || "ungenre";
    this.Author = Author || "anonymous";
    this.Read = Read || "false";
    this.readDate = new Date(readDate) || '';
}

var BookList = function(booksRead, notRead, bookShelf) {
    this.booksRead = booksRead || 0;
    this.notRead = notRead || "";
    this.bookShelf = bookShelf || [];

    booksRead: function(){
        
    }
}


var book1 = new Book("War and Peace", "Fiction", "Leo Tolstoy", "True", '3/2/14');
var book2 = new Book("Anna Karenina", "Fiction", "Leo Tolstoy", "False");

console.log(book1);
console.log(book2);