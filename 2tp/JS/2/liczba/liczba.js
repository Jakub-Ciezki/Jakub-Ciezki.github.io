function sprawdz()
{
    var liczba = document.getElementById("pole").value;

    if (liczba == 0) document.getElementById("wyjscie").innerHTML = "Zero";
    else if (liczba > 0) document.getElementById("wyjscie").innerHTML = "Dodatnia";
    else if (liczba < 0) document.getElementById("wyjscie").innerHTML = "Ujemna";
    else document.getElementById("wyjscie").innerHTML = "To nie jest Liczba!";
}