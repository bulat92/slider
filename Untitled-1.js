"use strict";
const nextRight    = document.getElementById('next'),//правая кнопка
      prevLeft     = document.getElementById('prev'),//левая кнопка
      slide        = document.querySelectorAll('.slid'),//слайд
      dotBox       = document.getElementById('dots'),// каробка с точкаи
      mainSection  = document.getElementById('mainSection'),
      SlideR       = document.getElementById('slider'),// каробка с слайдами
      dot          = document.querySelectorAll('.dot');// МАССИВ с точками


let dotsNumber         = 0,// для текущей позиций точки
    nextArrowRight     = 2,// значения для изменнеия иконки правой картинки 
    prevArrowLeft      = 0,// значения для изменнеия иконки левой картинки 
    autoIntervalValue  = 5000, // Создает переменную с содержанием длительности интерывалва
    positionSlide      = 1,
    startTouchValue    = 0,
    endTouchValue      = 0,
    okForAutoMove      = true,
    forFocus           = false,
    autoMove          = 0,
    transitionDuration = "ease 2s" ;// одобряет афтопрокрутку после того как указатель за пределами
  

/*for(let x = 1; x < slide.length-1; x++){ сдесь создавались точки для навигатция. 
    let y = document.createElement('div'); Для того чтоб разрузить JS файл было решено перекинуть все в PHP 
    y.className = "dot";
    y.dataset.dotNumber = x;
    dotBox.appendChild(y);
}*/

SlideR.style.transition = transitionDuration;

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
    
    clearTimeout(autoMove);//Выключить интервал

    SlideR.style.transition = transitionDuration;
    changeDotsRight();
    changeArrowRight();

    positionSlide++;

    if(positionSlide == slide.length-1){
        nextRight.removeEventListener('click', nextRightFunc); // Add event onclick Удален
        SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;
        removeTouchEvent();
        noTransitionRight();
        positionSlide=1;
    }else{
        SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;
    }
    if(okForAutoMove){
    }
    
    autoMove = setTimeout(nextRightFunc,autoIntervalValue);
}
nextRight.addEventListener('click', nextRightFunc); // Add event onclick Добавлен



let prevLeftFunc = function(){// Движение слайда по клику

    clearTimeout(autoMove);//Выключить интервал

    SlideR.style.transition = transitionDuration;
    changeDotsLeft();
    changeArrowLeft();

   
    positionSlide--;

    if(positionSlide == 0){
        prevLeft.removeEventListener('click', prevLeftFunc); // Add event onclick удален
        SlideR.style.left = `-${window.innerWidth*positionSlide}%`;
        removeTouchEvent();
        noTransitionLeft();
        positionSlide = slide.length-2;
        
    }else{
        SlideR.style.left = `-${ window.innerWidth*positionSlide }px`;
    }
    if(okForAutoMove){
    }
  
    autoMove = setTimeout(nextRightFunc,autoIntervalValue);
}
prevLeft.addEventListener('click', prevLeftFunc); // Add event onclick Добавлен


function noTransitionRight(){
    let forEndTransitionRight = function(event){
        SlideR.style.transition = "none";
        SlideR.style.left = `-${window.innerWidth}px`;
        SlideR.removeEventListener('transitionend', forEndTransitionRight, false);
        addTouchEvent();
        nextRight.addEventListener('click', nextRightFunc); // Add event onclick Добавлен
    }
    SlideR.addEventListener('transitionend', forEndTransitionRight, false);
}        
function noTransitionLeft(){
    let forEndTransitionLeft = function(event){
        SlideR.style.transition = "none";
        SlideR.style.left = `-${window.innerWidth*(slide.length-2)}px`;
        SlideR.removeEventListener('transitionend', forEndTransitionLeft, false);
        addTouchEvent();
        prevLeft.addEventListener('click', prevLeftFunc); // Add event onclick Добавлен
    }
    SlideR.addEventListener('transitionend', forEndTransitionLeft, false);
}
autoMove = setTimeout(nextRightFunc, autoIntervalValue); // Здесь запускается внешний интервал /////////////////////////////////////////////////////////////////////////////////////////////////////////////.


mainSection.addEventListener('mouseover', function(){//Отключает автопрокрутку слайда при наведений
    clearTimeout(autoMove);
    okForAutoMove = false; //запрещает прокрутку
});

mainSection.addEventListener('mouseout', function(){
    autoMove = setTimeout(nextRightFunc,autoIntervalValue); //Включает автопрокрутку 
    okForAutoMove = true; //разрешает авто прокрутку 

});


SlideR.addEventListener("touchstart", handleStart, false);// От этой страки далее обработка событий касания

function handleStart(event){
    SlideR.style.transition = "none";
    startTouchValue = event.touches[0].clientX;
    clearTimeout(autoMove);//Выключить интервал
}

SlideR.addEventListener("touchend", touchend, false);
function touchend(event){
    SlideR.style.transition = transitionDuration;
    endTouchValue = event.changedTouches[0].clientX;
    clearTimeout(autoMove);//Выключить интервал
    

    if(startTouchValue>endTouchValue){
        if((startTouchValue - endTouchValue )>=(window.innerWidth/3)){// прокрутка в лево
            nextRight.click();
        }else{
            SlideR.style.left = `-${window.innerWidth*positionSlide}px`;
        }
    }else{
        if((endTouchValue - startTouchValue )>=(window.innerWidth/3)){// прокрутка в лево
            prevLeft.click();
        }else{
            SlideR.style.left = `-${window.innerWidth*positionSlide}px`;
        }   
    }
}

SlideR.addEventListener("touchmove", handleMove, false);

function handleMove(event){
    clearTimeout(autoMove);//Выключить интервал

    SlideR.style.left =`-${ (window.innerWidth*positionSlide) + (startTouchValue - event.touches[0].clientX)}px`;
}

function removeTouchEvent(){//эта функция удаляет сенсорные события во время переходов от первого слайда к последнему.
    SlideR.removeEventListener("touchmove", handleMove, false);
    SlideR.removeEventListener("touchend", touchend, false);
    SlideR.removeEventListener("touchstart", handleStart, false);
}
function addTouchEvent(){//эта функция добовляет сенсорные события во время переходов от первого слайда к последнему.
    SlideR.addEventListener("touchmove", handleMove, false);
    SlideR.addEventListener("touchend", touchend, false);
    SlideR.addEventListener("touchstart", handleStart, false);
}

window.addEventListener("blur", objectOnblur);   //отключение ввсех интервалов при смене фокуса

function objectOnblur(){
    clearTimeout(autoMove);//Выключить интервал
    forFocus = false;

}

window.addEventListener("focus", objectOnfocus);

function objectOnfocus(){
    if(!forFocus){
    forFocus = true;
    autoMove = setTimeout(nextRightFunc, autoIntervalValue);//включение интервала 
    }
}