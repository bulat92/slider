    "use strict";

var next    = document.getElementById('next');
var prev    = document.getElementById('prev');
var divs    = document.querySelectorAll('.slid');
var dot     = document.querySelectorAll('.dot');
var slider  = document.getElementById('slider');


var s           = 0;
var nextArrow   = 1;
var sek         = 0;
var prevArrow   = divs.length -1;
var divStyle    = 'char';

 
dot[s].style.transform = 'scale(1.2)';
dot[s].style.background = 'rgba(0, 0, 0, 1)';
slider.style.transition = 'ease-in-out 1s';

        

        
next.onclick = function(){
            
    dot[s].style.transform = 'scale(1)';
    dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
    s++;
        if(s == divs.length ){
            s--;
                for(s; s > 0; s-- ){
                    
                    dot[s].style.transform = 'scale(1)';
                    dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
                }
        }
    slider.style.left = `-${100*s}%`;
    
    nextArrow++;
            if(nextArrow > divs.length-1 ){
                nextArrow = 0;     
            }
            divStyle = window.getComputedStyle(divs[nextArrow]);
            next.style.backgroundImage = divStyle.getPropertyValue('background-image');  


            prevArrow++;
            if(prevArrow > divs.length-1 ){
                prevArrow = 0;     
            }
            divStyle = window.getComputedStyle(divs[prevArrow]);
            prev.style.backgroundImage = divStyle.getPropertyValue('background-image');  



            
            dot[s].style.transform = 'scale(1.2)';
            dot[s].style.background = 'rgba(0, 0, 0, 1)';
        }
        prev.onclick = function(){
            
            dot[s].style.transform = 'scale(1)';
            dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
            s--;
            if(s < 0 ){
                s++;
                for(s; s < divs.length-1; s++ ){
                     
                    dot[s].style.transform = 'scale(1)';
                    dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
                }
            }
            slider.style.left = `-${100*s}%`;

            prevArrow--;
            if(prevArrow < 0 ){
                prevArrow = divs.length - 1;     
            }
            divStyle = window.getComputedStyle(divs[prevArrow]);
            prev.style.backgroundImage = divStyle.getPropertyValue('background-image'); 
            
            
            nextArrow--;
            if(nextArrow < 0 ){
                nextArrow = divs.length - 1;     
            }
            divStyle = window.getComputedStyle(divs[nextArrow]);
            next.style.backgroundImage = divStyle.getPropertyValue('background-image');     

 
            dot[s].style.transform = 'scale(1.2)';
            dot[s].style.background = 'rgba(0, 0, 0, 1)';
}
 
