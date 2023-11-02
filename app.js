let score = 0;
let hitRn = 0;
let start = false;
let highScore = 0;
let scoreVal = document.querySelector('.scoreval');
let hitVal = document.querySelector('.hitval');
let time = document.querySelector('.timer');
let pbottom = document.querySelector('.pbottom');
pbottom.innerHTML = `<h1 class="start">Press any key to start the Game!</h1>`;
document.querySelector('body').addEventListener("keypress",function(){
    if(start == false){
        bubble();
        counter();
        start = true;
    }
})
function bubble (){
    let clutter = "";
    for(i=1 ; i<=154; i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    pbottom.innerHTML = clutter;
    hitCount();
}

function counter(){
    let timer = 60;
    time.innerText = timer;
    let timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            time.innerText = timer;
        }
        else{
            clearInterval(timerInt);
            pbottom.innerHTML = `<h1 class="start">Game over your Score was ${score}! </br> <span>Press any key to start the Game!</span></h1>`;
            if(score > highScore){
                document.querySelector('.highscore').innerHTML = `<h4>Highscore = ${score} </h4>`
            }
            reset();
        }
    },1000)

}

function hitCount(){
    hitRn = Math.floor(Math.random()*10);
    hitVal.innerText = hitRn;
}

function scoreCount(){
    score += 10;
    scoreVal.innerText = score;
}

document.querySelector('.pbottom').addEventListener('click',function(delts){
    if(hitRn == Number(delts.target.innerText)){
        scoreCount();
        bubble();
    }
})

function reset(){
    start = false;
    hitVal.innerText = 0;
    scoreVal.innerText = 0;
}


