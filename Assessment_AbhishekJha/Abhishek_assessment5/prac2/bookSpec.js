

    
   
test('It should check if book exists',function(assert){
        var b = {id:2,author:'Harry Potter'};
        assert.equal(bookStore.deleteBook(b.id),false)
    });

test('check if the book is deleted successfully',function(assert){
        var b = {id:3,author:'Hunger games'};
        assert.equal(bookStore.deleteBook(b.id),true);
    });
test('GetBooks should return an Array',function(assert){
        
    assert.equal(bookStore.getBooks().length > 0 , true)
    })

 test('It should add a book to the array', function (assert) {
            var result = bookStore.addBook('YO');
            assert.equal(result, true);
        });
 test('It should give all the  books', function (assert) {
            var result = bookStore.getBooks();
            var allBooks = JSON.stringify('bookList');
            assert.equal(allBooks, result);
        });

 test('It should check for a duplicate entry',function(assert){
        var b = {id:3,author:'Hunger games'};
        assert.equal( b.id in bookStore.getBooks(),true);
    });
