function sprawdz()
{
	var liczba = document.getElementById("pole").value;

	if(liczba > 0) {
		document.getElementById("wart_wyjsc").innerHTML = "Liczba jest dodatnia!";
	} else if(liczba == ":3" || liczba == ";3") {
		document.getElementById("wart_wyjsc").innerHTML = ":33333";
	} else if(liczba == 0) {
		document.getElementById("wart_wyjsc").innerHTML = "Liczba jest równa zero!";
	} else if(liczba < 0) {
		document.getElementById("wart_wyjsc").innerHTML = "Liczba jest ujemna!";
	}

	
}
function dodaj()
{
	var liczA = document.getElementById("pole").value;
	var liczB = document.getElementById("pole_dodaj").value;

	var wynik_dodaj = Number(liczA) + Number(liczB);

	document.getElementById("wart_wyjsc").innerHTML = wynik_dodaj;
}