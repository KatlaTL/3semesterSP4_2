var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
}
var btn = document.getElementById("btn1");
btn.addEventListener("click", clickHandler);

function clickHandler(evt) {
    var divs = document.getElementsByTagName("div");
    divs[0].style.backgroundColor = "yellow";
    divs[1].style.backgroundColor = "green";
    divs[2].style.backgroundColor = "blue";
}