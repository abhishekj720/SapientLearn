$(document).ready(() => {
    'use strict';
    const countryAPI = 'https://restcountries.eu/rest/v2/all';
    function fetchCountries() {
        $.ajax({
            url: countryAPI,
            type: "GET",
            async: true,//default value
        }).then(result => {
            //console.log(result);
            bindCountries(result);
        }).catch(err => {
            console.log(err);
        });
    }
    function bindCountries(data) {
        data.forEach((x, i) => {
            //console.log(x.name);
            //console.log(x.alpha2Code);
            let option = $('<option/>').val(x.name).text(x.name);
            $('#ddlCountry').append(option);
        });
    }
    
    fetchCountries();

    var product={
        "arrayOfProducts": [
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "CHECK PRINT SHIRT",
                "company":"Sapient",
                "price": 110
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "GLORIA HIGH LOGO SNEAKER",
                "company":"Sapient",
                "price": 91
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "CATE RIGID BAG",
                "company":"Sapient",
                "price": 94.5
            },
            {
                "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "GUESS CONNECT WATCH",
                "company":"Sapient",
                "price": 438.9
            },
            {
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                "name": "'70s RETRO GLAM KEFIAH",
                "company":"Sapient",
                "price": 20
            }
        ]
    };
    
    function addRow(productName) {
        var table = document.getElementById('data_table');
        var table_len = (table.rows.length) - 1;
        viewProduct(table_len);
        table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='product_row" + table_len + "'>" + productName + "</td>"+ "<td><input type='button' id='view_product" + table_len + "' value='View Product' class='add form-control btn-primary' data-toggle='modal' data-target='#exampleModal"+table_len+"> </td></tr>";
    }

    function viewProduct(no){
document.getElementById('cont').innerHTML+="<div class='modal fade' id='exampleModal"+no+" tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>"+product.arrayOfProducts[no].name+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'><img src="+product.arrayOfProducts[no].imgUrl+" height='42' width='42'></div><div> Price:"+product.arrayOfProducts[no].price+"</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div>";

        
    }

    for(let i=0;i<product.arrayOfProducts.length;i++){
        addRow(product.arrayOfProducts[i].name);
    }
});
    