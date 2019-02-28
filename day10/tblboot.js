

// var x =[{name:'A',age:1}, { name:'B',age:2}, { name:'C',age:3}, { name:'D',age:5}, { name:'E',age:7}];


// for(var i in x){console.log(x[i])}

// for(var i in x[0]){ console.log(i)}

(function () {
    'use strict';
    var noofColumns = [];
    var students = [{
        name: "Abhishek",
        age: 21
    },
    { name: "Sammed", age: 24 },
{name:"asdfs",age: 28},
{ name: "Sammed", age: 24 },
{name:"asdfs",age: 28},
{ name: "Sammed", age: 24 },
{name:"asdfs",age: 28},
{ name: "Sammed", age: 24 },
{name:"asdfs",age: 28},
{ name: "Sammed", age: 24 },
{name:"asdfs",age: 28}]
    function createElement(elementType) {
        return document.createElement(elementType);
    }
//console.log("1");
    function createHeaderRow() {
        var headerRow = createElement('tr');
        for (var i in students[0]) {
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
                dataColumn.innerHTML = students[x][noofColumns[columns]];
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
        var tbl = document.getElementById('tblEmployees');
        tbl.className='table table-striped bg-warning table-hover';
        tbl.appendChild(createHeaderRow());
        for(var i=0;i<students.length;i++){
            tbl.appendChild(createDataRow(i));
        }
        var buttons = document.getElementsByClassName('btn');
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

var newArray = students.filter(function(a,index){
    return a.age > 22;
})
console.log(newArray)
    createTable();
    // createHeaderRow();
    // createDataRow();
})();


