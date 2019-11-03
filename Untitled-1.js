"use strict";

let next         = document.getElementById('next');
let prev         = document.getElementById('prev');
let divs         = document.querySelectorAll('.slid');
let dotBox       = document.getElementById('dots');
dotBox.innerHTML = '<div class = "dot"></div>'.repeat(divs.length);
let dot          = document.querySelectorAll('.dot');
let slider       = document.getElementById('slider');

let s           = 0;
let nextArrow   = 1;
let sek         = 0;
let prevArrow   = divs.length -1;
let divStyle    = 'char';

for( let d = 0; d < divs.length; d++){
    dot[d].dataset.dotNumber = d;
}

changeMainDots()
slider.style.transition = 'ease-in-out 1s';

function changeMainDots(){
    dot[s].style.transform = 'scale(1.2)';
    dot[s].style.background = 'rgba(0, 0, 0, 1)';
}

function changeDots(){
    dot[s].style.transform = 'scale(1)';
    dot[s].style.background = 'rgba(0, 0, 0, 0.4)';
}    
function changeButtons(number, direction){
    divStyle = window.getComputedStyle(divs[number]);
    direction.style.backgroundImage = divStyle.getPropertyValue('background-image');
}   

next.onclick = function(){
            
    changeDots();

    s++;

    if(s == divs.length ){
        s = 0
        changeDots();
    }

    slider.style.left = `-${100*s}%`;
    
    nextArrow++;

    if(nextArrow > divs.length-1 ){
        nextArrow = 0;     
    }

    changeButtons(nextArrow, next);

    prevArrow++;

    if(prevArrow > divs.length-1 ){
        prevArrow = 0;     
    }

    changeButtons(prevArrow, prev);
    
    changeMainDots();

}
prev.onclick = function(){
        
    changeDots();       
    s--;
    if(s < 0 ){
        s = divs.length-1; 
        changeDots();       
    }

    slider.style.left = `-${100*s}%`;

    prevArrow--;

    if(prevArrow < 0 ){
        prevArrow = divs.length - 1;     
    }
    changeButtons(prevArrow, prev);
        
    nextArrow--;

    if(nextArrow < 0 ){
        nextArrow = divs.length - 1;     
    }

    changeButtons(nextArrow, next);  

    changeMainDots();
}

dotBox.onmouseover = function (event) {
    let target = event.target;

    alert(target.dataset.dotNumber);
}
 
