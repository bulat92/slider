    "use strict";

        var next = document.getElementById('next');
        var prev = document.getElementById('prev');
        var divs = document.querySelectorAll('.slid');
        var dot = document.querySelectorAll('.dot');
        
        var s = 0;

        var sek = 0;

        divs[s].style.right = '0';
        dot[s].style.transform = 'scale(1.2)';
        dot[s].style.background = 'rgba(0, 0, 0, 0.6)';

        

        
        next.onclick = function(){
            divs[s].style.right = '-100%';
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
            divs[s].style.right = '0';
            dot[s].style.transform = 'scale(1.2)';
            dot[s].style.background = 'rgba(0, 0, 0, 0.6)';
        }
        prev.onclick = function(){Z
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
            divs[s].style.right = '0';
            dot[s].style.transform = 'scale(1.2)';
            dot[s].style.background = 'rgba(0, 0, 0, 0.6)';
        }

setInterval(next.onclick, 10000);

