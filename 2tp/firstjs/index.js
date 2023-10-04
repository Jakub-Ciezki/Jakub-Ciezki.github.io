var button = document.querySelector("#changeColorText"); //wybranie przycisku i zapisanie w zmiennej button.
var text = document.querySelector("#mainText"); //wybranie tekstu i zapisanie w zmiennej text.
x = 0;
button.onclick = function() { 
        switch(x){
            case 0:
               text.classList.add("textGreen");
                x++
                break;
            case 1:
                text.classList.remove("textGreen");
                x--
                break;
            default:
                console.log();("błąd");
    }
}