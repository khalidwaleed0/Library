class Book {
	constructor(title, author, isRead) {
		this.title = title;
		this.author = author;
		this.isRead = isRead;
	}
	toggleReadStatus() {
		this.isRead = !this.isRead;
	}
}

let library = [];
let modalCard = document.querySelector(".modal-add-book");

document.getElementById("btn-add-book").onclick = () => modalCard.classList.add("active-modal");
document.querySelector(".modal-add-book").onclick = () => modalCard.classList.remove("active-modal");
document.querySelector("form").onclick = (e) => e.stopPropagation();
document.querySelector("form").onsubmit = addBook;

function addCardEventListeners(bookCard) {
	bookCard.querySelector(".btn-is-read").onclick = toggleReadButton;
	bookCard.querySelector(".btn-remove").onclick = removeBook;
}

function addBook(e) {
	e.preventDefault();
	let title = document.querySelector("input[name='title']").value;
	let author = document.querySelector("input[name='author']").value;
	let isRead = document.querySelector("input[type='checkbox']").checked;
	let newBook = new Book(title, author, isRead);
	library.push(newBook);
	refreshLibrary();
	modalCard.classList.remove("active-modal");
	e.target.reset();
}

function toggleReadButton(e) {
	e.target.classList.toggle("is-read");
	e.target.textContent = e.target.textContent === "Read" ? "Not read" : "Read";
	let currentBook = library[e.target.parentElement.dataset.index];
	currentBook.toggleReadStatus();
	console.log(currentBook);
}

function removeBook(e) {
	library.splice(e.target.parentElement.dataset.index, 1);
	refreshLibrary();
}

function refreshLibrary() {
	let booksGrid = document.querySelector(".books-grid");
	booksGrid.innerHTML = "";
	for (let i = 0; i < library.length; i++) {
		let bookCard = document.createElement("div");
		bookCard.setAttribute("class", "book-card");
		bookCard.setAttribute("data-index", i);
		bookCard.innerHTML = `
		<p>${library[i].title}</p>
		<p>${library[i].author}</p>
		${
			library[i].isRead
				? '<button class="btn-is-read is-read">Read</button>'
				: '<button class="btn-is-read">Not read</button>'
		}
		<button class="btn-remove">Remove</button>`;
		booksGrid.appendChild(bookCard);
		addCardEventListeners(bookCard);
	}
}
