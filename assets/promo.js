let arr = [ "vova" , {bg : "linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee)"} , { disc : "градиент"} ,
            "журкин" , {bg : "-webkit-linear-gradient(45deg, #fb8a61,#f74d72,#d2089a,#7029c9)"}  , { disc : "градиент"} , 
            "lovkach" , {bg : "linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706)"} , { disc : "градиент"} ,
            "уник123" , {bg : "url(https://i.ibb.co/N9K63Sd/image.png)"} , { disc : "кота в кепке"} , //кот в кепке
            "300" , {bg : "-webkit-linear-gradient(90deg, #ddee44,#ff4420)"} , { disc : "Шарик за 1000"} , 
            "lierow" , {bg : "url(https://i.ibb.co/YTWtpbc/image.png)"} , { disc : "Мем лицо"}, // лицо мем
            "slavaukraine" , {bg : "url(https://i.ibb.co/X3td9P4/image.png)"} , { disc : "Шар с украиной"} , //украина
            "standa1one" , {bg : "url(https://i.ibb.co/bzT6VN9/animation-gif.gif)"} , { disc : "Шар с мем гифкой"},// гиф сига
            "mambitchh" , {bg : "url(https://i.ibb.co/FKV3g2g/image.png)"} , { disc : "Шар с зеленым челом"}, // зеленый чел
            "настюша", {bg : "url(https://i.ibb.co/mDFJ33V/image.png)"} , { disc : "Получили настюшу"}, // настюша
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