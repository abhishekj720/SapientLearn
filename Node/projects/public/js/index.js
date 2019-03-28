// (function(){
//     'use strict';
//     $('#search').bind('click',function(){
//         let item= $('#boxtest').val()
//         //function(index, value){
//             // alert(value)st:3000/api/search',{body:value},function(data){
//             //     alert(data)
//             //     console.log(data)
//             // })

//             // $.post('localho
//             $.ajax({
//                 type: "POST",
//                 url: "api/search",
//                 data: {data:item},
//                 success: function(result){
//                     console.log(result)
//                 }
//                 // dataType: dataType
//             });
//         //})
//         // $.post('/api/search',{item:item})
//         // .then(res=>{
//         //     console.log(res);
//         // }).catch(err=>{
//         //     console.log(err);
//         // })
//     })
// })();

$(document).ready(() => {
    $('#loader').hide();
    $('#search').bind('click', function () {
      
        const searchAPI = 'api/search/';
        var searchTerm=$('#boxtest').val();
        console.log(searchTerm);
        $('#loader').show();
        $.ajax({
            url: searchAPI,
            data:{data:searchTerm},
            type: "POST",
            // async: true,//default value
        }).then(result => {
            console.log(result);
            //alert(result);
            //$('#searchInput').val(result.toString());
         
            // for(let i=0;i<3;i++){
            //     $('.card-header')[i].append(result.response.items[i].name);//name
            //     $('.card-title')[i].append(result.response.items[i].salePrice);//price
            //     //$('img')[i].attr("src", result.response.items[i].largeImage);//img src
            //     var shortText=jQuery.trim(result.response.items[i].shortDescription).substring(0, 100);
            //     shortText = shortText + "...";
            //     $('.card-text')[i].append(shortText);//desc
            // }
            
            $('#myContainer').empty();
            $('#loader').hide();
             result.items.forEach(element => {

                // when you click show more more description should come
                // changing string to an array and then counting 20 words which must be shown at first time when click more again 20 more words 
                let words = element.shortDescription.split(' ');
                desc = '';
                for(let i=0;i<20 && i<words.length;i++){
                    desc += words[i]+' '
                }
                products = [];

                // console.log(desc);
                
                let card = `<div class="col-md-4">
                <div class="card mb-3">
                    <h4 class="card-header"></h4>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                    </div>
                    <img style="height: 200px; width: 100%; display: block;" src="${element.largeImage}"
                        alt="Card image">
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">${element.shortDescription}</a>
                        <a href="#" id="show${item}" class="card-link">More${item}</a>
                    </div>
                </div>
            </div>`
               $('#myContainer').append(card);
             });

           
        }).catch(err => {
            console.log(err);
            $('#loader').hide();
        });
    });
});