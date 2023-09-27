const body = document.querySelector('body');
const btnColor = document.querySelector('#btnColor');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const trans = document.querySelector('#trans');

function setColor(){
    // rgb(0, 255, 14);
    // rgba(0, 255, 35, 0.5);
    const redVal = Math.floor((Number(red.value)*255)/100);
    const greenVal = Math.floor((Number(green.value)*255)/100);
    const blueVal = Math.floor((Number(blue.value)*255)/100);
    const transVal = trans.value/100;
    //const rgbaColor = `rgb(${ redVal }, ${ greenVal }, ${ blueVal }, ${ transVal })`;//
    const rgbaColor = `rgba(${ redVal }, ${ greenVal }, ${ blueVal }, ${ transVal })`;
    body.style.background = rgbaColor;
    return rgbaColor;
}

setColor();
//btnColor.addEventListener('click', setColor);//
red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
trans.addEventListener('input', setColor);