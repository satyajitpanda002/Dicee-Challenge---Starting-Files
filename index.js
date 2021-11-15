var val1 = Math.floor((Math.random() * 6)) + 1;
var source = "/images/dice" + val1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", source);

var val2 = Math.floor((Math.random() * 6)) + 1;
source = "/images/dice" + val2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", source);

if (val1 > val2) {
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if (val1 < val2) {
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}