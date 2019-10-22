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

divs[s].style.right = '0';
dot[s].style.transform = 'scale(1.2)';
dot[s].style.background = 'rgba(0, 0, 0, 0.6)';

        

        
        next.onclick = function(){
            slider.style.right = '100%';
            dot[s].style.transform = 'scale(1)';
            dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
            s++;
            if(s == divs.length ){
                s--;
                for(s; s > 0; s-- ){
                    divs[s].style.right = '100%'; 
                    dot[s].style.transform = 'scale(1)';
                    dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
                }
            }
            slider.style.left = '-100*s}%';
            
            prevArrow++;
            if(prevArrow > divs.length ){
                prevArrow = 0;     
            }
            divStyle = window.getComputedStyle(divs[prevArrow])
            next.style.backgroundImage = divStyle.getPropertyValue('background-image');  
            divs[s].style.right = '0';
            dot[s].style.transform = 'scale(1.2)';
            dot[s].style.background = 'rgba(0, 0, 0, 0.6)';
        }
        prev.onclick = function(){
            divs[s].style.right = '100%';
            dot[s].style.transform = 'scale(1)';
            dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
            s--;
            if(s < 0 ){
                s++;
                for(s; s < divs.length-1; s++ ){
                    divs[s].style.right = '-100%';
                    dot[s].style.transform = 'scale(1)';
                     dot[s].style.background = 'rgba(0, 0, 0, 0.4)';       
                }
            }
            
            prevArrow--;
            if(prevArrow < 0 ){
                prevArrow = divs.length - 1;     
            }
            divStyle = window.getComputedStyle(divs[prevArrow])
            prev.style.backgroundImage = divStyle.getPropertyValue('background-image');  
            divs[s].style.right = '0';
            dot[s].style.transform = 'scale(1.2)';
            dot[s].style.background = 'rgba(0, 0, 0, 0.6)';
        }

//setInterval(next.onclick, 10000);

