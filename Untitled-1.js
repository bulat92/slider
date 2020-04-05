"use strict";
const nextRight    = document.getElementById('next'),//правая кнопка
      prevLeft     = document.getElementById('prev'),//левая кнопка
      slide        = document.querySelectorAll('.slid'),//слайд
      dotBox       = document.getElementById('dots'),// каробка с точкаи
      mainSection  = document.getElementById('mainSection'),
<<<<<<< HEAD
      SlideR       = document.getElementById('slider'),// каробка с слайдами
      dot          = document.querySelectorAll('.dot');// МАССИВ с точками


let dotsNumber        = 0,// для текущей позиций точки
    nextArrowRight    = 2,// значения для изменнеия иконки правой картинки 
    prevArrowLeft     = 0,// значения для изменнеия иконки левой картинки 
    autoIntervalValue = 800, // Создает переменную с содержанием длительности интерывалва
    positionSlide     = 1;  
  

/*for(let x = 1; x < slide.length-1; x++){ сдесь создавались точки для навигатция. 
    let y = document.createElement('div'); Для того чтоб разрузить JS файл было решено перекинуть все в PHP 
    y.className = "dot";
    y.dataset.dotNumber = x;
    dotBox.appendChild(y);
}*/

SlideR.style.transition = "ease 0.6s";

=======
      SlideR       = document.getElementById('slider');// каробка с слайдами

for(let x = 1; x < slide.length-1; x++){
    let y = document.createElement('div');
    y.className = "dot";
    y.dataset.dotNumber = x;
    dotBox.appendChild(y);
}

SlideR.style.transition = "ease 0.6s";

const dot          = document.querySelectorAll('.dot');// точка

let dotsNumber        = 0,// для текущей позиций точки
    nextArrowRight    = 2,// значения для изменнеия иконки правой картинки 
    prevArrowLeft     = 0,// значения для изменнеия иконки левой картинки 
    autoIntervalValue = 1000, // Создает переменную с содержанием длительности интерывалва
    positionSlide     = 1,
    slidWidth         = document.documentElement.clientWidth;  

>>>>>>> 919d268bfe571616a4f0e4602485f98b90cfe532
dot[dotsNumber].style.background = "white";    

SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;

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
    
<<<<<<< HEAD
    clearTimeout(autoMove);//Выключить интервал
=======
    clearTimeout(autoMove);//Выключить интервал . Интервал запускаетя на строке 163
>>>>>>> 919d268bfe571616a4f0e4602485f98b90cfe532

    SlideR.style.transition = "ease 0.6s";
    changeDotsRight();
    changeArrowRight();

    positionSlide++;

    if(positionSlide == slide.length-1){
        nextRight.removeEventListener('click', nextRightFunc); // Add event onclick Добавлен
        SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;
        noTransitionRight();
        positionSlide=1;

    }else{
        SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;
    }
<<<<<<< HEAD
    autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Зпускаетя после удаления
=======
    autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Зпускаетя после удаления на строке 100. Интервал запускается в первый раз на строке 163
>>>>>>> 919d268bfe571616a4f0e4602485f98b90cfe532
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
        SlideR.style.left = `-${window.innerWidth*positionSlide}%`;
        noTransitionLeft()
        positionSlide = slide.length-2;
        
    }else{
        SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;
    }

    autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Зпускаетя после удаления на строке 125. Интервал запускается в первый раз на строке 163

}
prevLeft.addEventListener('click', prevLeftFunc); // Add event onclick Добавлен


function noTransitionRight(){
    let forEndTransitionRight = function(event){
        SlideR.style.transition = "none";
        SlideR.style.left = `-${window.innerWidth}px`;
        SlideR.removeEventListener('transitionend', forEndTransitionRight, false);
        nextRight.addEventListener('click', nextRightFunc); // Add event onclick Добавлен    
    }
    SlideR.addEventListener('transitionend', forEndTransitionRight, false);
}        
function noTransitionLeft(){
    let forEndTransitionLeft = function(event){
        SlideR.style.transition = "none";
        SlideR.style.left = `-${window.innerWidth*(slide.length-2)}px`;
        SlideR.removeEventListener('transitionend', forEndTransitionLeft, false);
        prevLeft.addEventListener('click', prevLeftFunc); // Add event onclick Добавлен    
    }
    SlideR.addEventListener('transitionend', forEndTransitionLeft, false);
}
let autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Здесь запускается внешний интервал .


mainSection.addEventListener('mouseover', function(){//Отключает автопрокрутку слайда при наведений
    clearTimeout(autoMove);
<<<<<<< HEAD
});

mainSection.addEventListener('mouseout', function(){
=======
    autoIntervalValue = 1000000;
});

mainSection.addEventListener('mouseout', function(){
    autoIntervalValue = 1600;
>>>>>>> 919d268bfe571616a4f0e4602485f98b90cfe532
    autoMove = setTimeout(nextRightFunc,autoIntervalValue); //Включает автопрокрутку 
});

SlideR.addEventListener("touchmove", handleMove, false);

function handleMove(event){
  
    console.log(event.touches[0]);
    SlideR.style.left =`-${ 100*positionSlide+event.touches[0].clientX}%`;
    
<<<<<<< HEAD
}

SlideR.addEventListener("touchstart", handleStart, false);// От страки далее обработка событий касания

function handleStart(event){
    SlideR.style.transition = "none";
    startValue = event.touches[0].clientX;
    positionForTouchPX = SlideR.getBoundingClientRect().left;
    console.log(startValue);
}

SlideR.addEventListener("touchend", touchend, false);
function touchend(event){
    SlideR.style.transition = "ease 0.6s";
    endValue = event.changedTouches[0].clientX;
    console.log(endValue);
    if((startValue - endValue )>=(window.innerWidth/3)){
        nextRight.click();
    }else{
        SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;
    }
    autoMove = setTimeout(nextRightFunc,autoIntervalValue);
}

SlideR.addEventListener("touchmove", handleMove, false);

function handleMove(event){


    SlideR.style.left =`-${ (window.innerWidth*positionSlide) + (startValue - event.touches[0].clientX)}px`;
    console.log(`${event.touches[0].clientX}px`);

}
=======
}
>>>>>>> 919d268bfe571616a4f0e4602485f98b90cfe532
