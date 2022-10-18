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

let modalCard = document.querySelector(".modal-add-book");

document.getElementById("btn-add-book").onclick = () => modalCard.classList.add("active-modal");
document.querySelector(".modal-add-book").onclick = () => modalCard.classList.remove("active-modal");
document.querySelector("form").onclick = (e) => e.stopPropagation();
