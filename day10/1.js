(function(){
    'use strict';

    var btn = document.getElementById('btn');
    btn.addEventListener('click',function(e){
        console.log(e)
        console.log(this);
    })

    var teta = document.getElementById('teta');
    teta.addEventListener('keypress',function(e){
        var myreg = /[0-9]/

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

    var qs = document.querySelector('#btn')
    console.log(qs)

    var ql = document.querySelectorAll('#btn')
    console.log(ql)
    

    var rtclk = document.getElementById('body')
    rtclk.addEventListener('contextmenu',function(e){
        alert("not possible")
        e.preventDefault();
    })

})()


// var btn = document.getElementById('btn');

// btn.addEventListener(click,(e)=>{

// })