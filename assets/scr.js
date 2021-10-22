let score =  0 ;

let result;

result = score;

scrW  = window.innerWidth;
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
Timer();

function ScoreLayer()
{
    document.getElementById('stats').style.display = 'block';
    document.getElementById("result").innerHTML = score;
}
 
function BtnAgain()
{
    location.reload();
}
