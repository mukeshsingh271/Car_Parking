var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function(){
    let f = feet.value;
    let i = f*12;
    inch.value = i;
});
inch.addEventListener('input', function(){
    let i = inch.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
})



















// var feet = document.getElementById('feets');
// var inch = document.getElementById('inchs');

// feet.addEventListener('input', function(){
//     let f = feet.value;
//     let i = f*12;
//     inch.value = i;
// });

// inch.addEventListener('input', function(){
//     let i = this.value;
//     let f = i/12;
//     if(!Number.isInteger(f)){
//         f = f.toFixed(2);
//     }
//     feet.value = f;
// });


// function x(){
//     for(let i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
    
//     console.log('You are a good boy');
// }
// x();

function x(){
    for(var i = 1; i<=5; i++){
        function abc(x){
            setTimeout(function(){
                console.log(x);
            }, x * 1000);
        }
        abc(i);
    }
    
    console.log('You are a good boy');
}
x();