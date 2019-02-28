// (function(){

//     function createElement(elementType) {
//         return document.createElement(elementType);
//     }
    
// function createHeaderRow() {
//     var headerRow = createElement('tr');
//     // for (var i in students[0]) {
//         var column = createElement('th');
//         column.innerHTML = i;
//         headerRow.appendChild(column);

//         noofColumns.push(i);
//     // }
//     console.log(headerRow);
//     return headerRow;
// }
// function addon(){
//     books.author = document.getElementById('author').value
//     books.book = document.getElementById('book').value;
//     books.date = document.getElementById('date').value;
// console.log(books);
// }

// })();






(function () {
    'use strict';
    var noofColumns = [];
    var books = [{author:"AUTHOR",
book:"BOOK_NAME",
date:"DATE"}];

addbook.addEventListener('click',function(){
    books.author = document.getElementById('author').value
    books.book = document.getElementById('book').value;
    books.date = document.getElementById('date').value;

    var books_1 = {author :books.author,
        book: books.book,
        date: books.date};
        
        books.push(books_1);
})
  


       function createElement(elementType) {
        return document.createElement(elementType);
    }
//console.log("1");
    function createHeaderRow() {
        var headerRow = createElement('tr');
        for (var i in books[0]) {
            var column = createElement('th');
            column.innerHTML = i;
            headerRow.appendChild(column);

            noofColumns.push(i);
        }
        console.log(headerRow);
        return headerRow;
    }
   // console.log("2");
    function createDataRow(x){
        //var dataRow = createElement('tr');
            var dataRow = createElement('tr');
            for(var columns=0;columns < noofColumns.length ;columns++){
                var dataColumn = createElement('td');
                dataColumn.innerHTML = books[x][noofColumns[columns]];
                dataRow.appendChild(dataColumn);
            }
            //for adding button for deleting any row
            var tdForButton = createElement('td')
            var button = createElement('button');
            button.className = 'btn btn-primary'
           
            button.rowNumber = x;
             button.id = 'btn'+x;
        

            tdForButton.appendChild(button);
            dataRow.appendChild(button)
            button.innerHTML ="Delete!";

            
           

           // btn.onClick = function(){ window.alert("hi")}


            console.log(dataRow);    
            return dataRow;
        
        
        
    }

    function createTable(){
        var tbl = document.getElementById('book_table');
        tbl.className='table table-striped bg-warning table-hover';
        tbl.appendChild(createHeaderRow());
        for(var i=0;i<books.length;i++){
            tbl.appendChild(createDataRow(i));
        }
        var buttons = document.getElementsByClassName('addbook');
        // for(var r=0;r<buttons.length;r++){
        //     buttons[r].addEventListener('click',function(){
        //         console.log(['rowNumber']);
        //         console.log(this['rowNumber'])
        //         this.parentNode.remove();
        //     })
        // }
        function ho(i){
            return function(){
                console.log(i);
            }
            
        }
        for(var i=0;i<buttons.length;i++)
        {
            buttons[i].onclick = ho(i)

        }
    }

//console.log(newArray)
    createTable();
    // createHeaderRow();
    // createDataRow();
})();


