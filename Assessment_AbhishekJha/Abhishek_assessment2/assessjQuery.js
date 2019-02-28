(function(){

    'use strict'
    function addBook(){
        let book = {
            name:$('#author').val(),
            author:$('#book').val(),
            date:$('#txtData').val()
        }
        BookList.push(book);

    }

    function deleteBook(){

    }
    function editBook(){

    }

    $('#add').bind('click',addBook);
})();