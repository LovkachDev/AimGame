scrW  = window.innerWidth - 100;
let isClick = false;
let score = 0;
function Click()
{
    score++;
    let randX = Math.floor(Math.random() * scrW);
    let randY = Math.floor(Math.random() * 500);
    let pxX = randX + 'px';
    let pxY = randY + 'px';
    document.getElementById('otpt').innerHTML = score;
    document.getElementById("btn").style.left = pxX;
    document.getElementById("btn").style.top = pxY;
    let CurrentBalance = localStorage.getItem('CurrentBalance');
    CurrentBalance ++;
    localStorage.setItem('CurrentBalance', CurrentBalance);
    document.getElementById('balance').innerHTML = localStorage.getItem('CurrentBalance');
}


function ScoreLayer()
{
    document.getElementById('stats').style.display = 'block';
    document.getElementById("result").innerHTML = score;
}
function BtnAgain()
{
    location.reload();
}
function BtnStart()
{
    document.getElementById('main').style.display = 'none';
    document.getElementById('btn').style.visibility = 'visible';
    document.getElementById('field').style.display = 'flex';
    Timer();
}

let sound = new Audio("assets/sound.mp3");
sound.volume = 0.3;
while (Click() == true )
{
    sound.play();
}