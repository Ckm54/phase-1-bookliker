document.addEventListener("DOMContentLoaded", function() {
    const bookListContainer = document.getElementById("list-panel")
    const bookContainer = document.getElementById("list")
    const bookDataContainer = document.getElementById("show-panel")
    function getBooks() {
        fetch("http://localhost:3000/books")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                displayBookTitle(element)
            });
        })
    }

    function displayBookTitle(book) {
        let li = document.createElement("li")
        li.innerText = book.title
        bookContainer.append(li)
        li.addEventListener("click", () => {
            displayBookInfo(book)
        })
    }

    function displayBookInfo(book) {
        console.log(book)
    }
    getBooks()
});
