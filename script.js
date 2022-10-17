class Book {
    constructor(title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}
let library = [];
let book1 = new Book("Naruto", "Masashi Kishimoto", true);
library.push(book1);
console.log(library);