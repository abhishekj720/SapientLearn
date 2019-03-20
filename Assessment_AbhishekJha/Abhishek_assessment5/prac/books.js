(function () {
    var books = [{
        id: 1,
        author: "Abhishek"
    }];

    function addBook(book) {
        //your logic goes here
        if (DuplicateId(book.id)) {
            books.push(book);
            return getBooks();
        } else {
            return 'Duplicate id';
        }
    }

    function DuplicateId(id) {
        return getBooks().findIndex(x => x.id == id);
    }

    function getBooks() {
        //get the complete list of books.
        return books;
    }
    window.bookStore = {
        addBook: addBook,
        getBooks: getBooks
    }
})();