describe('Verify Books',function(){
 
    it('Does the book library exists',function(){
        expect(bookStore).toBeDefined()
    });
    it('Does the library has addBook',function(){
        expect(bookStore.addBook).toBeDefined()
    });
    it('Does the library has getBooks',function(){
        expect(bookStore.getBooks).toBeDefined()
    });

    it('Is getBooks returning an array',function(){
        expect(bookStore.getBooks().length).toBeGreaterThan(-1)
    })
});
describe('Add Book Feature',function(){
    it('Is it adding a book to the array',function(){
        let b = {id:1,author:'Abhi'};
        expect(bookStore.addBook(b).length).toBeGreaterThan(0);
    });
    it('duplicate ID should not exist',function(){
        let b = {id:1,author:'AAAA'};
        expect(bookStore.addBook(b)).toBe('Duplicate id');
    });
})


describe('Delete Book Feature',function(){
    it('No books available',function(){
        
        expect(bookStore.getBooks().length).toBeLessThan(1);
    });
    it('')
})