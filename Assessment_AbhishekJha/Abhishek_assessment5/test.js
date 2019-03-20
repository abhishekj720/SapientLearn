// test('When there is no book available in library',function(assert){
//         var result = 0;
//         assert.equal(result,"No book Available in library")
//     });

// test('Library is full',function(assert){
//     var result = 9999;
//     assert.equal(result,"Library cannot store more books");
// })    ;

// test('Proper details is not filled for dscription of book',function(assert){
//     var result = -10;
//     assert.equal(result,"Fill the proper details")
// });

// // test('')


describe('Verify Books',function(){
 
    it('Check if BookStore is existing',function(){
        expect(bookStore).toBeDefined()
    });
    it('Check if BookStore is having addBook',function(){
        expect(bookStore.addBook).toBeDefined()
    });
    it('Check if BookStore is having getBooks',function(){
        expect(bookStore.getBooks).toBeDefined()
    });

    it('GetBooks should return an Array',function(){
        expect(bookStore.getBooks().length).toBeGreaterThan(-1)
    })
});
describe('Add Book Feature',function(){
    it('It should add a book to the array',function(){
        let b = {id:1,author:'jjjj'};
        expect(bookStore.addBook(b).length).toBeGreaterThan(0);
    });
    it('should verfiy the duplicate ID doesnot exist',function(){
        let b = {id:1,author:'jjjj'};
        expect(bookStore.addBook(b)).toBe('Duplicate id');
    });
})