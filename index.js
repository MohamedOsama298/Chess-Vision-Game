

var indicator= document.createElement('img');
// indicator.className='indicator';
var checkIndicator= document.createElement('img');
let currentTarget='f6';
let num=0;
let checkBoard=document.getElementById('checks');
let currentScore=0;
const score=document.getElementById('score');
const checks=['a1','a2','a3','a4','a5','a6','a7','a8','b1','b2','b3','b4','b5','b6','b7','b8','c1','c2','c3','c4','c5','c6','c7','c8','d1','d2','d3','d4','d5','d6','d7','d8','e1','e2','e3','e4','e5','e6','e7','e8','f1','f2','f3','f4','f5','f6','f7','f8','g1','g2','g3','g4','g5','g6','g7','g8','h1','h2','h3','h4','h5','h6','h7','h8'];
function checkGenerator(){
    return Math.floor(Math.random() * 64);
}

const startBtn = document.getElementById('startBtn')
const timer=document.getElementById('timer');
console.log(timer)
let time=30;
let target=document.getElementById('target');

const board=document.getElementById('chess-board');
console.log(document.querySelector('td img'))
function tileClickHandler(res){
    
var checkIndicator= document.createElement('img');
    if(res.target.attributes.id.nodeValue==currentTarget){
        currentScore++;
        score.textContent=currentScore;
        indicator.src='./images/right-sign.png'
        checkIndicator.src='./images/right-sign.png'
        res.target.appendChild(indicator);
        checkBoard.appendChild(checkIndicator);
        console.log(res)
        setTimeout(()=>document.querySelector('td>img').remove(),500)
    }
    else{
        indicator.src='./images/wrong-sign.png'
        checkIndicator.src='./images/wrong-sign.png'
        res.target.appendChild(indicator);
        checkBoard.appendChild(checkIndicator);
        console.log(res)
        setTimeout(()=>document.querySelector('td img').remove(),500)
    }
    num=checkGenerator();
    target.textContent=checks[num];
    currentTarget=checks[num];
}

function startHandler()
{
    checkBoard.innerHTML='';
    num=checkGenerator();
    target.textContent=checks[num];
    currentTarget=checks[num];
    startBtn.disabled=true
    time=30;
    currentScore=0;
    score.textContent=currentScore;
    board.addEventListener('click',tileClickHandler);
    let timeIntervalId=setInterval((()=>{if(time>0)time--;
        timer.textContent=time;
        }),1000)

    setTimeout(()=>{
        board.removeEventListener('click',tileClickHandler);
        clearInterval(timeIntervalId);
        startBtn.textContent='try again';
        startBtn.disabled=false;
        }
        ,30000);
        
}

startBtn.addEventListener('click',startHandler);


