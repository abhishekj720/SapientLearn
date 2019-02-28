(function(){
'use strict'

// var flname = document.getElementById('fname')
// if(flname.value != null){
// flname.addEventListener('click',function(e){
//     console.log(flname.value)
// })
// }



var teta = document.getElementById('fname');
    teta.addEventListener('click',function(e){
        var myreg = /[a-zA-Z .]/

        validateInput(e,myreg)
    //    if(!myreg.test(e.key)){
    //     e.preventDefault(); //to disable the keypress in text field
    //    }
    //    else{
    //     console.log(e)
    //     console.log(this);
       
    //     console.log(e.key)   //will display which key you pressed
    //    }
    })


    function validateInput(e,myreg){
        if(myreg.test(e.key)){
            console.log(e.key)
        }
        else{
            e.preventDefault()
        }
    }


})();

// function fnamefun()
// {   var reg = "/^[a-zA-Z .]+/"
//     var fname = document.getElementById('fname');
//     if(!( reg.test(fname.value) ))
//         alert("wrong first name") 
    
           
// }