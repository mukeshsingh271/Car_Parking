var newDiv = document.createElement('p');
var newText = document.createTextNode('I have a Mi mobile phone. I love my mobile.');

newDiv.className = 'discmobile';
newDiv.id = 'mob';

newDiv.appendChild(newText);
console.log(newDiv);

cont = document.getElementById('text');
addText = document.getElementById('putul');

cont.insertBefore(newDiv, putul);


var img1 = document.getElementById('img1');

img1.addEventListener('mouseover', function(){
    this.style.filter = 'grayscale(0%)';
});

img1.addEventListener('mouseout', function(){
    this.style.filter = 'grayscale(100%)';
});

var img2 = document.getElementById('img2');

img2.addEventListener('mouseover', function(){
    this.style.filter = 'grayscale(0%)';
});

img2.addEventListener('mouseout', function(){
    this.style.filter = 'grayscale(100%)';
});









// var pinki = document.getElementById('img1');

// pinki.onmouseover = abc;
// function abc(){
//     this.style.filter = 'grayscale(0%)';
// }

// pinki.addEventListener('mouseout', function (){
//     this.style.filter = 'grayscale(100%)';
// });

// document.getElementById('img2').onmouseover = aaa;
// function aaa(){
//     document.getElementById('img2').style.filter = 'grayscale(0%)';
// }

// document.getElementById('img2').addEventListener('mouseout', function(){
//     this.style.filter = 'grayscale(100%)';
// });


// var newDiv = document.createElement('div');
// var addText = document.createTextNode('Akshat Singh');

// newDiv.className = 'son';
// newDiv.id = 'firstSon';

// newDiv.appendChild(addText);

// var container = document.getElementById('text');
// var addPara = document.getElementById('pinkiPara');
// newDiv.style.color = 'blue';
// newDiv.style.fontSize = '24px';
// newDiv.style.fontWeight = 'bold';
// newDiv.style.margin = '20px 0px 10px 0px';
// newDiv.style.background = 'lightblue';
// newDiv.style.padding ='10px 10px 10px 20px';


// container.insertBefore(newDiv, addPara);

// var newDiv1 = document.createElement('div');
// var addText1 = document.createTextNode('Chiku Singh');

// newDiv1.className = 'son1';
// newDiv1.id = 'firstSon1';
// newDiv1.style.color = 'blue';
// newDiv1.style.fontSize = '24px';
// newDiv1.style.fontWeight = 'bold';
// newDiv1.style.margin = '20px 0px 10px 0px';
// newDiv1.style.background = 'lightblue';
// newDiv1.style.padding ='10px 10px 10px 20px';

// newDiv1.appendChild(addText1);

// var container1 = document.getElementById('text');
// var addPara1 = document.getElementById('putulPara');
// newDiv1.style.color = 'blue';
// newDiv1.style.fontSize = '20px';

// container.insertBefore(newDiv1, addPara1);

// putul = document.getElementById('putul');

// putul.style.color = 'blue';

// acccc = document.getElementById('tutu');

// acccc.style.color = 'green';

// accccc = document.getElementById('nitesh');

// accccc.style.color = 'cyan';














// var head = document.getElementById('img1');

// head.onmouseover = abc;
// function abc(){
//     document.getElementById('img1').style.filter = 'grayscale(0%)';
// }

// document.getElementById('img1').onmouseout = xyz;
// function xyz(){
//     document.getElementById('img1').style.filter = 'grayscale(100%)';
// }

// document.getElementById('img2').addEventListener('mouseover', function(){
//     this.style.filter = 'grayscale(0%)';
// });

// var head1 = document.getElementById('img2');

// head1.addEventListener('mouseout', function(){
//     this.style.filter = 'grayscale(100%)';
// })




// var feet = document.getElementById('feet');
// var inch = document.getElementById('inch');

// feet.addEventListener('input', function(){
//     let f = this.value;
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







