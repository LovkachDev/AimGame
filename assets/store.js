function OpenRedModal()
{
    document.getElementById('BuyRed').style.display = 'flex';
}
function OpenGreenModal()
{
    document.getElementById('BuyGreen').style.display = 'flex';
}
function OpenPurpleModal()
{
    document.getElementById('BuyPurple').style.display = 'flex';
}
function OpenGradOneModal()
{
    document.getElementById('BuyGradOne').style.display = 'flex';
}
function CloseModal()
{
    document.getElementById('BuyRed').style.display = 'none';
    document.getElementById('BuyGreen').style.display = 'none';
    document.getElementById('BuyPurple').style.display = 'none';
    document.getElementById('BuyGradOne').style.display = 'none';
}



function BuyRedPlayer()
{
    check = localStorage.getItem("CurrentBalance");
    if ( check < 50 )
    {
        document.getElementById("errorRed").innerHTML = "Недостаточно баланса";
    }
    else
    {
        red = document.getElementById('btn').style.background = '#fc5858';
        localStorage.setItem("Player" , red);
        localStorage.setItem('CurrentBalance' , localStorage.getItem('CurrentBalance') - 50)
        CloseModal();
    }         
}
function BuyGreenPlayer()
{
    check = localStorage.getItem("CurrentBalance");
    if ( check < 50 )
    {
        document.getElementById("errorGreen").innerHTML = "Недостаточно баланса";
    }
    else
    {
        green = document.getElementById('btn').style.background = '#b1f55d';
        localStorage.setItem("Player" , green);
        localStorage.setItem('CurrentBalance' , localStorage.getItem('CurrentBalance') - 50)
        CloseModal();
    }         
}
function BuyPurplePlayer()
{
    check = localStorage.getItem("CurrentBalance");
    if ( check < 50 )
    {
        document.getElementById("errorPurple").innerHTML = "Недостаточно баланса";
    }
    else
    {
        purple = document.getElementById('btn').style.background = '#ae5df5';
        localStorage.setItem("Player" , purple);
        localStorage.setItem('CurrentBalance' , localStorage.getItem('CurrentBalance') - 50)
        CloseModal();
    }         
}
function BuyGradOnePlayer()
{
    check = localStorage.getItem("CurrentBalance");
    if ( check < 300 )
    {
        document.getElementById("errorGradOne").innerHTML = "Недостаточно баланса";
    }
    else
    {
        GradOne = document.getElementById('btn').style.background = '-webkit-linear-gradient(90deg, #ddee44,#ff4420)';
        localStorage.setItem("Player" , GradOne);
        localStorage.setItem('CurrentBalance' , localStorage.getItem('CurrentBalance') - 300)
        CloseModal();
    }         
}

let Player = localStorage.getItem("Player");
document.getElementById('btn').style.background = Player;



