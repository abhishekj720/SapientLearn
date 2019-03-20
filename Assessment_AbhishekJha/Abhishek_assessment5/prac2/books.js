(function () {
    var books = [{
        id: 1,
        name: "The Night Elm Of Street"
    }];

    function getId(id) {
        return getBooks().findIndex(x => x.id == id);
    }

    function addBook(book) {
        if (getId(book.id)==-1) {
            console.log('create')
            books.push(book);
            return getBooks();
        } else {
            return 'Duplicate id';
        }
    }

    function deleteBook(id) {
        var index = getId(id);
        if (index == -1){
            return 'No book found with id '+id;
        }
        else{
            books.splice(index,1)
            index = getId(id)
            if(index== -1)
            return 'Book with id '+id+' deleted successfully';
        }
    }


    function getBooks() {
        return books;
    }

    const updateBook = book => {
        return new Promise((resolve,reject) => {
            if(getId(book.id)>=0){
                resolve('book updated')
            }
            else {
                reject('book does not exist')
            }
        })
    }
    
    const promise = updateBook({id:1,name:"Abhi"})
    promise.then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
     window.bookStore = {
        addBook: addBook,
        getBooks: getBooks,
         deleteBook: deleteBook
     }
})();
