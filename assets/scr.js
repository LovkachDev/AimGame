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
let arr = [ "vova" , {bg : "linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee)"} , { disc : "градиент"} ,
            "журкин" , {bg : "-webkit-linear-gradient(45deg, #fb8a61,#f74d72,#d2089a,#7029c9)"}  , { disc : "градиент"} , 
            "lovkach" , {bg : "linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706)"} , { disc : "градиент"} ,
            "уник123" , {bg : "url(https://i.ibb.co/N9K63Sd/image.png)"} , { disc : "кота в кепке"} , //кот в кепке
            "300" , {bg : "-webkit-linear-gradient(90deg, #ddee44,#ff4420)"} , { disc : "Шарик за 1000"} , 
            "lierow" , {bg : "url(https://i.ibb.co/YTWtpbc/image.png)"} , { disc : "Мем лицо"}, // лицо мем
            "slavaukraine" , {bg : "url(https://i.ibb.co/X3td9P4/image.png)"} , { disc : "Шар с украиной"} , //украина
            "standa1one" , {bg : "url(https://i.ibb.co/bzT6VN9/animation-gif.gif)"} , { disc : "Шар с мем гифкой"},// гиф сига
            "mambitchh" , {bg : "url(https://i.ibb.co/FKV3g2g/image.png)"} , { disc : "Шар с зеленым челом"}, // зеленый чел
        ];
let promo = document.getElementById('promo');
function Promo()
{
    if(arr.includes(promo.value))
    {
        index = arr.indexOf(promo.value);
        Add = index + 1;
        ColorValue = arr[Add].bg;
        promo.value = "Вы получили:" + arr[Add + 1].disc;
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
let sound = new Audio("assets/sound.mp3");
sound.volume = 0.3;
while (Click() == true )
{
    sound.play();
}