"use strict";

let next         = document.getElementById('next');//правая кнопка
let prev         = document.getElementById('prev');//левая кнопка
let divs         = document.querySelectorAll('.slid');//слайд
let dotBox       = document.getElementById('dots');// каробка с точкаи
dotBox.innerHTML = '<div class = "dot"></div>'.repeat(divs.length - 2);// создание точек
let dot          = document.querySelectorAll('.dot');// точка
let slider       = document.getElementById('slider');// каробка с слайдами
//const LAST       = divs[0];

//let LAST2 = LAST.cloneNode(true); // клонировать сообщение
 

//slider.prepend(LAST2);

let s           = 0;// для текущей позиций точки
let nextArrow   = 2;// значения для изменнеия иконки правой картинки 
let sek         = 0;// для интервала 
let prevArrow   = 0;// значения для изменнеия иконки левой картинки 
let divStyle    = 'char';// 

for( let d = 0; d < dot.length; d++){//добавление дада сет 
    dot[d].dataset.dotNumber = d;//
}

changeMainDots()//
slider.style.transition = 'ease-in-out 1s';//

function changeMainDots(){
    dot[s].style.transform = 'scale(1.2)';//
    dot[s].style.background = 'rgba(0, 0, 0, 1)';//
}

function changeDots(){//
    dot[s].style.transform = 'scale(1)';//
    dot[s].style.background = 'rgba(0, 0, 0, 0.4)';//
}    
function changeButtons(number, direction){//
    divStyle = window.getComputedStyle(divs[number]);//
    direction.style.backgroundImage = divStyle.getPropertyValue('background-image');//
}   

next.onclick = function(){//
            
    changeDots();//

    s++;//

    if(s == divs.length-2 ){//
        slider.style.transition = 'none';//
        slider.style.left = `0`;//
        s = 0//
        changeDots();//
        slider.style.transition = 'ease-in-out 1s';//
    }

    slider.style.left = `-${100+100*s}%`;//
    
    nextArrow++;//

    if(nextArrow > divs.length-1 ){//
        nextArrow = 0;     //
    }

    changeButtons(nextArrow, next);//

    prevArrow++;//

    if(prevArrow > divs.length-1 ){//
        prevArrow = 0;     //
    }

    changeButtons(prevArrow, prev);//
    
    changeMainDots();//

}
prev.onclick = function(){//
        
    changeDots();  //     
    s--;//
    if(s = 0 ){//
        slider.style.transition = 'none';//
        slider.style.left = `-${100*s+100}%`;//
        s = divs.length-3; //
        changeDots();      // 
        slider.style.transition = 'ease-in-out 1s';//
    }

    slider.style.left = `-${100+(100*s)}%`;//

    prevArrow--;//

    if(prevArrow < 0 ){//
        prevArrow = divs.length - 1;  //   
    }
    changeButtons(prevArrow, prev);//
        
    nextArrow--;//

    if(nextArrow < 0 ){//
        nextArrow = divs.length - 1;   //  
    }

    changeButtons(nextArrow, next);  //

    changeMainDots();//
}

dotBox.onmouseover = function (event) {
    let target = event.target.dataset.dotNumber;//
    if(target != undefined && s != target){ // если выбранная точка не равна тикущему положению и определена
        target = Number(target);
        if(target < s){
            target = s - target;
            for(target; target != 0 ; target--){// перелистывание по навидению 
                prev.click();
            }
        }
        if(target > s){
            target = target - s;
            for(target; target != 0 ; target--){ // перелистывание по навидению 
                next.click();
            }
        }
    }
}
 
