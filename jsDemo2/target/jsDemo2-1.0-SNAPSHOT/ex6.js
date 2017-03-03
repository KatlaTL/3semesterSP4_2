var btn = document.getElementById("buttons");
btn.addEventListener("click", calculate);

function calculate(evt) {
    var btnClicked = evt.target.innerText;
    if (btnClicked === "=") {
        var calculatedValue = function () {
            var valueToCalculate = document.getElementById("display").innerText;
            var splited = valueToCalculate.split("+");
            if(splited.length > 1) {
                var result = 0;
                for (var i = 0; i < splited.length; i++) {
                    result += Number(splited[i]);
                }
                return result;
            }
            splited = valueToCalculate.split("-");
            if(splited.length > 1) {
                var result = Number(splited[0]);
                for (var i = 1; i < splited.length; i++) {
                    result -= Number(splited[i]);
                }
                return result;
            }
            splited = valueToCalculate.split("*");
            if(splited.length > 1) {
                var result = Number(splited[0]);
                for (var i = 1; i < splited.length; i++) {
                    result = result * Number(splited[i]);
                }
                return result;
            }
            splited = valueToCalculate.split("/");
            if(splited.length > 1) {
                var result = Number(splited[0]);
                for (var i = 1; i < splited.length; i++) {
                    result = result / Number(splited[i]);
                }
                return result;
            }
        };
        document.getElementById("display").innerText = calculatedValue();
    } else {
        document.getElementById("display").innerText += btnClicked;
    }
}