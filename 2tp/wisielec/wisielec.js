var haslo = "kotlet schabowy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
    if (haslo[i]==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = wypisz_haslo;

function start()
{
    

    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
}
