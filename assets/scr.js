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
    return {score}
}


function ScoreLayer()
{
    document.getElementById('stats').style.display = 'block';
    document.getElementById("result").innerHTML = score;
    if (localStorage.getItem("bestScore") == 0 )
    {
        bestScore = 0;
    }
    else{
        bestScore = localStorage.getItem("bestScore");
    }

    if (score > bestScore)
    {
        bestScore = score;
        localStorage.setItem("bestScore" , bestScore);
        document.getElementById("bestscore").innerHTML = bestScore;
    }
    else{
        document.getElementById("bestscore").innerHTML = localStorage.getItem("bestScore");
    }
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
