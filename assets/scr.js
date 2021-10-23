
scrW  = window.innerWidth - 100;

let score = 0;

let CurrentBalance = 0;

function Click ()
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





function Timer ()
{
    let count = 30;

    let counter=setInterval(timer, 1000);

    function timer()
    {
    count=count-1;
    if (count <= 0)
    {
        clearInterval(counter);
        ScoreLayer();
    }
    document.getElementById("timer").innerHTML=count; 
    } 
    timer();
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



function GreenPlay()
{
    document.getElementById('btn').style.background = '#b1f55d';
}
function OrangePlay()
{
    document.getElementById('btn').style.background = '#f5745d';
}
function PurplePlay()
{
    document.getElementById('btn').style.background = '#ae5df5';
}
function RedPlay()
{
    document.getElementById('btn').style.background = '#fc5858';
}
function DefaultPlay()
{
    document.getElementById('btn').style.background = '#fff';
}


Curr = localStorage.getItem("CurrentBalance");


function OpenModal()
{
    document.getElementById('buy').style.display = 'flex';
}
function CloseModal()
{
    document.getElementById('buy').style.display = 'none';
}

function BuyPlayer()
{
    check = localStorage.getItem("CurrentBalance");
    if ( check < 250 )
    {
        document.getElementById("error").innerHTML = "Недостаточно баланса";
    }
    else
    {
        red = document.getElementById('btn').style.background = '#fc5858';
        localStorage.setItem("RedPlayer" , red);
        localStorage.setItem('CurrentBalance' , localStorage.getItem('CurrentBalance') - 250)
        CloseModal();
    }
}
let RedPlayer = localStorage.getItem("RedPlayer");


if (RedPlayer == '#fc5858')
{
    RedPlay();
}
else
{
    DefaultPlay();
}
