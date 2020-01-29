"use strict";
const nextRight    = document.getElementById('next'),//правая кнопка
      prevLeft     = document.getElementById('prev'),//левая кнопка
      slide        = document.querySelectorAll('.slid'),//слайд
      dotBox       = document.getElementById('dots'),// каробка с точкаи
      mainSection  = document.getElementById('mainSection'),
      SlideR       = document.getElementById('slider');// каробка с слайдами

for(let x = 1; x < slide.length-1; x++){
    let y = document.createElement('div');
    y.className = "dot";
    y.dataset.dotNumber = x;
    dotBox.appendChild(y);
}

SlideR.style.transition = "ease 0.6s";

const dot          = document.querySelectorAll('.dot');// точка

let dotsNumber     = 0,// для текущей позиций точки
    nextArrowRight = 2,// значения для изменнеия иконки правой картинки 
    prevArrowLeft  = 0,// значения для изменнеия иконки левой картинки 
    autoIntervalValue = 1600, // Создает переменную с содержанием длительности интерывалва
    positionSlide  = 1;//  

dot[dotsNumber].style.background = "white";    

function changeDotsRight(){//изменения точек на право
    dot[dotsNumber].style.background = "rgba(0,0,0,0.4)";
    dotsNumber++;
    if(dotsNumber==slide.length-2){
        dotsNumber = 0;
    }
    dot[dotsNumber].style.background = "white";
}

function changeDotsLeft(){//изменения точек на лево
    dot[dotsNumber].style.background = "rgba(0,0,0,0.4)"; 
    dotsNumber--;
    if(dotsNumber==-1){
        dotsNumber = slide.length-3;
    }    
    dot[dotsNumber].style.background = "white";
}   

function changeArrowRight(){
    
    nextArrowRight++;
    prevArrowLeft++;

    if(nextArrowRight == slide.length-1){
        nextArrowRight = 1;
    }
    if(prevArrowLeft == slide.length-1){
        prevArrowLeft = 1;
    }

    nextRight.style.backgroundImage = window.getComputedStyle(slide[ nextArrowRight ]).getPropertyValue('background-image');
    prevLeft.style.backgroundImage = window.getComputedStyle(slide[ prevArrowLeft ]).getPropertyValue('background-image');
    
}
function changeArrowLeft(){

    nextArrowRight--;
    prevArrowLeft--;

    if(nextArrowRight == 0){
        nextArrowRight = slide.length-2;
    }
    if(prevArrowLeft == -1){
        prevArrowLeft = slide.length-3;
    }

    nextRight.style.backgroundImage = window.getComputedStyle(slide[ nextArrowRight ]).getPropertyValue('background-image');
    prevLeft.style.backgroundImage = window.getComputedStyle(slide[ prevArrowLeft ]).getPropertyValue('background-image');

}
dotBox.onmouseover = function (event) {
    let target = event.target.dataset.dotNumber;//
    if(target != undefined && positionSlide != target){ // если выбранная точка не равна тикущему положению и определена
        target = Number(target);
        if(target < positionSlide){
            target = positionSlide - target;
            for(target; target != 0 ; target--){// перелистывание по навидению НА точки
                prevLeft.click();
            }
        }
        if(target > positionSlide){
            target = target - positionSlide;
            for(target; target != 0 ; target--){ // перелистывание по навидению НА точки
                nextRight.click();
            }
        }
    }
}

 

let nextRightFunc = function(){//Движение слайда по клику
    
    clearTimeout(autoMove);//Выключить интервал . Интервал запускаетя на строке 163

    SlideR.style.transition = "ease 0.6s";
    changeDotsRight();
    changeArrowRight();

    positionSlide++;

    if(positionSlide == slide.length-1){
        nextRight.removeEventListener('click', nextRightFunc); // Add event onclick Добавлен
        SlideR.style.left = `-${ 100*positionSlide }%`;
        noTransitionRight();
        positionSlide=1;

    }else{
        SlideR.style.left = `-${ 100*positionSlide }%`;
    }
    autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Зпускаетя после удаления на строке 100. Интервал запускается в первый раз на строке 163
}
nextRight.addEventListener('click', nextRightFunc); // Add event onclick Добавлен



let prevLeftFunc = function(){// Движение слайда по клику

    clearTimeout(autoMove);//Выключить интервал . Интервал запускаетя на строке 163

    SlideR.style.transition = "ease 0.6s";
    changeDotsLeft();
    changeArrowLeft();

   
    positionSlide--;

    if(positionSlide == 0){
        prevLeft.removeEventListener('click', prevLeftFunc); // Add event onclick Добавлен
        SlideR.style.left = `-${100*positionSlide}%`;
        noTransitionLeft()
        positionSlide = slide.length-2;
        
    }else{
        SlideR.style.left = `-${ 100*positionSlide }%`;
    }

    autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Зпускаетя после удаления на строке 125. Интервал запускается в первый раз на строке 163

}
prevLeft.addEventListener('click', prevLeftFunc); // Add event onclick Добавлен


function noTransitionRight(){
    let forEndTransitionRight = function(event){
        SlideR.style.transition = "none";
        SlideR.style.left = "-100%";
        SlideR.removeEventListener('transitionend', forEndTransitionRight, false);
        nextRight.addEventListener('click', nextRightFunc); // Add event onclick Добавлен    
    }
    SlideR.addEventListener('transitionend', forEndTransitionRight, false);
}        
function noTransitionLeft(){
    let forEndTransitionLeft = function(event){
        SlideR.style.transition = "none";
        SlideR.style.left = "-800%";
        SlideR.removeEventListener('transitionend', forEndTransitionLeft, false);
        prevLeft.addEventListener('click', prevLeftFunc); // Add event onclick Добавлен    
    }
    SlideR.addEventListener('transitionend', forEndTransitionLeft, false);
}
let autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Здесь запускается внешний интервал .


mainSection.addEventListener('mouseover', function(){//Отключает автопрокрутку слайда при наведений
    clearTimeout(autoMove);
    autoIntervalValue = 1000000;
});

mainSection.addEventListener('mouseout', function(){
    autoIntervalValue = 1600;
    autoMove = setTimeout(nextRightFunc,autoIntervalValue); //Включает автопрокрутку 
});