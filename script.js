const myLibrary = [];

function Book(title, author, pages, read) {

  // the constructor...
  this.id = crypto.randomUUID(); // Generate a unique UUID
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {

  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks(myLibrary) {

  // Get the container where books will be displayed
  const bookContainer = document.getElementById('library-container');
  // Get the add book button
  const addBook = document.getElementById('add-book');
  // Clear previous content
  bookContainer.innerHTML = '';
  // Check if books array exists and has items
  if (!myLibrary || myLibrary.length === 0) {
    bookContainer.innerHTML = '<p>No books to display.</p>';
    return;
  }
  // Loop through each book in the array
  myLibrary.forEach(book => {
    // Create a card element for each book
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    // Create content for the book card
    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.innerHTML = `<strong>Author:</strong> ${book.author}`;

    const pages = document.createElement('p');
    pages.innerHTML = `<strong>Pages:</strong> ${book.pages}`;

    const read = document.createElement('p');
    read.innerHTML = `<strong>Read:</strong> ${book.read ? 'Yes' : 'No'}`;


    // Append elements to the card
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);

    // Add the card to the container
    bookContainer.appendChild(bookCard);
  });

}

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#add-book").addEventListener("click", () => {
    document.querySelector("#popUp").style.display = "flex";
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector("#popUp").style.display = "none";
  });

  document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    addBookToLibrary(title, author, pages, read);
    displayBooks(myLibrary);
  });
  // Call the function to display books
  displayBooks(myLibrary);
});

// CTRL + SHIFT + P
// Search for "Format Document"