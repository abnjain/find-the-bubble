var timer = 60;
var score = 0;
var hitNum = 0;

function newHit() {
    hitNum = Math.floor(Math.random()*10); 
    document.querySelector('#hitval').textContent = hitNum;
}

function checkNewHit() {
    var pbtmElement = document.querySelector('#pbtm');
    if (pbtmElement) {
        pbtmElement.addEventListener('click', function(dets) {
            var clickedNumber = Number(dets.target.textContent);
            if (clickedNumber === hitNum) {
                increaseScore();
                bubblePop();
                newHit();
            }
        });
    } else {
        console.error('#pbtm element not found.');
    }
}

function increaseScore() {
    score += 10;   
    document.querySelector('#scoreval').textContent = score; 
}

function bubblePop() {
    let bubble = "";
    for (let i = 0; i <= 64; i++) {
        var bubbleNum = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${bubbleNum}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = bubble;
}

function runTimer() {
    var time = setInterval(function(){
        if (timer>0) {
            timer--;
            document.querySelector('#timeval').textContent = timer;
        }else{
            clearInterval(time);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over<br>Your Score ${score}</h1>`;
        }
    }, 1000);
}


checkNewHit();
runTimer();
bubblePop();
newHit();