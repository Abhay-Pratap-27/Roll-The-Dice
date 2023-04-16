// alert("Working"); 
if(window.performance.navigation.type ===1){
    rollDice();
}

function rollDice(){
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6 + 1;
randomNumber1 = Math.floor(randomNumber1);//No. 1-6

var randomImageSource1= "img/dice"+ randomNumber1 +".png"; // img/dice1.png - img/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "img/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

changeTitle(randomNumber1,randomNumber2,);
}


function changeTitle(num1,num2){


//If player 1 wins
if(num1>num2){
    document.querySelector("h1").innerHTML="Player1 Wins 🚩 ";
}
//If player 2 wins
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player2 Wins 🚩";
}
//Draw
else{
    document.querySelector("h1").innerHTML="🏳️ Draw..!";
}
}