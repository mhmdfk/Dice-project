var clicked=false,clicked2=false,dice1=0,dice2=0,counter1=0,counter2=0;

function firstDice(){
    dice1=Math.floor(Math.random()*6)+1;
    var image1="./images/dice"+dice1+".png";
    document.querySelector(".img1").setAttribute("src",image1);
    clicked=true;
    result(clicked,clicked2);
}

function secondDice(){
    dice2=Math.floor(Math.random()*6)+1;
    var image2="./images/dice"+dice2+".png";

    document.querySelector(".img2").setAttribute("src",image2);
    clicked2=true;
    result(clicked,clicked2);
}

function result(c,c1){
    if(c&&c1){
        clicked=false;
        clicked2=false; 
        if(dice1>dice2){
            document.querySelector("h1").innerHTML="Player1 wins";
            counter1++;
        }
        else if(dice2>dice1){
            document.querySelector("h1").innerHTML="Player2 wins";
            counter2++;
        }else{
            document.querySelector("h1").innerHTML="draw";
        }
        document.querySelector("span").innerHTML=counter1+"-"+counter2;
    }
}