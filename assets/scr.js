
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


let arr = [ "vova" , {bg : "-webkit-linear-gradient(90deg, #00ff00,#ff9100)"} ,
            "журкин" , {bg : "-webkit-linear-gradient(45deg, #fb8a61,#f74d72,#d2089a,#7029c9)"} , 
            "lol" , {bg : "url(https://i.ibb.co/rktfQc4/image.png)"} ,
            "balik" , {balance : "1000"}];

let promo = document.getElementById('promo');


function Promo()
{
    if(arr.includes(promo.value))
    {
        index = arr.indexOf(promo.value);
        Add = index + 1;
        ColorValue = arr[Add].bg;
        Player = localStorage.getItem("Player");
        Button = document.getElementById('btn').style.background = ColorValue;
        localStorage.setItem('Player' , Button );
        document.getElementById('promo').style.borderBottom = '2px solid #8eff04';
    }
    else
    {
        document.getElementById('promo').style.borderBottom = '2px solid #fc5858';
        promo.value = 'Неправильный код';
    }
}


