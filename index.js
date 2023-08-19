// alert("working!")
var n= Math.random();
var a = Math.floor(n*6) + 1 ;

var b = "dice"+a+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , b );


var randomnumber2 = Math.floor(Math.random()*6 ) + 1 ;
var randomImageSource2 = "dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if ( a > randomnumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!" ;
}
else if ( a < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! " ;
}
else {
  document.querySelector("h1").innerHTML = "Draw ";
}
