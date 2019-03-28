// $('search').click(()=>{
//     $('boxtext')
// }) 

let searchTerm = $('#txtBox').val();
$.ajax({
    url: '/api/search',
    data:searchTerm,
    type:'POST'
}).then(result=>{
    console.log(result);
})
.catch(err=>{console.log(err)})