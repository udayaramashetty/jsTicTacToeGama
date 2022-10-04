let sign = "X";
let display = document.getElementById("player");

function printx(number){
    let boxelement = document.getElementById("b" +number);
    console.log(boxelement);

    if(boxelement.innerHTML == ""){
    boxelement.innerHTML = sign;
    winner();
    checkSign();
    display.innerHTML = "<font size='5'> <b>" + sign + " It's Your Turn</b></font>"
    }
}

function checkSign(){
    if(sign== "X") sign ="O";
    else
        sign="X";
}
function getBox(no){
    return document.getElementById("b" + no).innerHTML;
}

function checkMove(a,b,c,m){
    if(getBox(a)== m && getBox(b)==m && getBox(c)==m )
        return true;
        else
        return false;
}

function winner(){

    if(  checkMove(1,2,3,sign) ||  checkMove(4,5,6,sign) || checkMove(7,8,9,sign)  ||
         checkMove(1,4,7,sign) || checkMove(2,5,8,sign)  || checkMove(3,6,9,sign)  || 
         checkMove(1,5,9,sign) || checkMove(3,5,7,sign)  )
        {
            display.innerHTML=" <font size ='5'><b> " + sign + " Wins <b></font>";
            for(let i=1;i<=9;i++){
                document.getElementById("b"+i).innerHTML ="";
            }
            throw "Game End";
        }
        else{
            if( getBox(1)!="" && getBox(2)!="" && getBox(3)!="" && 
                getBox(4)!="" && getBox(5)!="" && getBox(6)!="" &&
                getBox(7)!="" && getBox(8)!="" && getBox(9)!="" 
                )

                {display.innerHTML=" <font size ='5'><b>It's a Tie<b></font>";
                for(let i=1;i<=9;i++){
                    document.getElementById("b"+i).innerHTML ="";
                }

                throw "It's a Tie";}
        }
}