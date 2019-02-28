// (function(){
// function * generatorFunction(){
//     console.log('THIs is first executed')
//     yield 'Hello'
//     console.log("se cond exec")
//     yield 'World';
//     console.log("sdfwedf")
//     yield 'My'

//     yield 'asd'
// }

// const generatorObject = generatorFunction();
// console.log(generatorObject.next().value+"sdfvsdvg");
// console.log('asdfadasdasdasdasda')
// console.log(generatorObject.next());
// console.log('QWERTY')
// //console.log(generatorObject.value);
// //console.log(generatorObject.next());
// })();



(function(){
    function * powerSeries(number,power){
        let base = number;
        while(true)
        {console.log("5")
            yield Math.pow(base,power)
            console.log("6")
            base++
        }
       
    }
    let powers = powerSeries(2,4);
    console.log(powers.next().value);
    console.log(powers.next().value);
    console.log(powers.next().value);
    console.log(powers.next().value);
    console.log(powers.next().value);
})()
