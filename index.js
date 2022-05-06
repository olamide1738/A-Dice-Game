var randomNumber1 = Math.floor(6 * Math.random())+1;

var dicee = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", dicee);





var randomNumber2 = Math.floor(6 * Math.random())+1;

var dice = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", dice);



if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent ="Player One Wins";
}
else if (randomNumber2> randomNumber1) {
    document.querySelector("h1").textContent ="Player Two Wins";
}
else if (randomNumber1 = randomNumber2) {
      document.querySelector("h1").textContent ="Draw";
}
else {
    document.querySelector("h1").textContent="Refresh Me";
}
