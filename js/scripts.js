// random number generator
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = function() {
    'use strict';
    let ctx = getCanvas();
    draw(ctx);
};

function getCanvas() {
    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    return ctx;
}

function draw(ctx) {
  // linear gradient bg
  let linGradColourEnd = '#A160F3';
  let linGradColourBegin = 'rgba(96,243,102,0.85)';

    // linear gradient bg setting in dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        linGradColourEnd = '#111';
        let linGradColourBegin = 'rgba(96,243,102,0.2)';
    }

    const linGrad = ctx.createLinearGradient((getRandomNumber(-200,800)), (getRandomNumber(-200,200)), (getRandomNumber(500,2300)), (getRandomNumber(500,800)));

    linGrad.addColorStop(0, linGradColourBegin);

    // linGrad.addColorStop(0.9, '#019F62');
    linGrad.addColorStop(1, linGradColourEnd);

    // circle1 gradient shape
    let circleX = (getRandomNumber(200,2000));
    let circleY = (getRandomNumber(-200,800));

    const circleGra = ctx.createRadialGradient(circleX,circleY,0, circleX,circleY,(getRandomNumber(1000,2000)));

    circleGra.addColorStop(0, 'rgba(225, 95, 186, 0.84)');
    circleGra.addColorStop(.8, 'rgba(225, 95, 186, 0)');

    // circle2 gradient shape
    let circle2X = (getRandomNumber(-400,400));
    let circle2Y = (getRandomNumber(600,1200));

    const circle2Gra = ctx.createRadialGradient(circle2X,circle2Y,0, circle2X,circle2Y,(getRandomNumber(600,1800)));

    circle2Gra.addColorStop(0, 'rgba(23, 233, 122, 0.3)');
    circle2Gra.addColorStop(1, 'transparent');

    // circle3 gradient shape
    let circle3X = (getRandomNumber(-600,0));
    let circle3Y = (getRandomNumber(-500,1800));

    const circle3Gra = ctx.createRadialGradient(circle3X,circle3Y,0, circle3X,circle3Y,(getRandomNumber(1800,2800)));
    circle3Gra.addColorStop(0, 'rgba(255, 199, 65, ' + (getRandomNumber(3,8) / 10) + ')');
    circle3Gra.addColorStop(1, 'rgba(255, 199, 65, 0)');

    // circle4 gradient shape
    let circle4X = (getRandomNumber(800,1300));
    let circle4Y = (getRandomNumber(-100,500));

    const circle4Gra = ctx.createRadialGradient(circle4X,circle4Y,0, circle4X,circle4Y,(getRandomNumber(800,1800)));
    circle4Gra.addColorStop(0, 'rgba(255, 255, 255, .45)');
    circle4Gra.addColorStop(.6, 'rgba(255, 255, 255, .05)');   
    circle4Gra.addColorStop(.9, 'rgba(255, 255, 255, 0)'); 

    // draw circle shapes
    ctx.fillStyle = linGrad;
    ctx.fillRect(0, 0, 2000, 2000);

    ctx.fillStyle = circleGra;
    ctx.fillRect(0, 0, 2000, 2000);

    ctx.fillStyle = circle2Gra;
    ctx.fillRect(0, 0, 2000, 2000);

    ctx.fillStyle = circle3Gra;
    ctx.fillRect(0, 0, 2000, 2000);

    ctx.fillStyle = circle4Gra;
    ctx.fillRect(0, 0, 2000, 2000);
}