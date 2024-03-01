var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-3.7.1.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function shawHK() {
var slajdd = document.getElementById("btnslajd");
var hollow = document.getElementById("btnHK");
var DemonC = document.getElementById("btnDMC");

	slajdd.style.display = "none";
	DemonC.style.display = "none";

	hollow.style.display = "block";
	ustawHK(1);
}
function showDMC() {
	var slajdd = document.getElementById("btnslajd");
	var hollow = document.getElementById("btnHK");
	var DemonC = document.getElementById("btnDMC");

	slajdd.style.display = "none";
	hollow.style.display = "none";

	DemonC.style.display = "block";
	ustawDMC(1);
}
function showslajd() {
	var slajdd = document.getElementById("btnslajd");
	var hollow = document.getElementById("btnHK");
	var DemonC = document.getElementById("btnDMC");

	hollow.style.display = "none";
	DemonC.style.display = "none";

	slajdd.style.display = "block";
	ustawslajd(1);
}

function scrollbtm() {
	window.scrollTo(0, document.body.scrollHeight);
}


var numer = Math.floor(Math.random()*5)+1;
			
			var timer1 = 0;
			var timer2 = 0;
			
			function ustawslajd(nrslajdu)
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				numer = nrslajdu - 1;
				
				schowaj();
				setTimeout("zmienslajd()", 500);

			}

			function ustawHK(nrslajdu)
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				numer = nrslajdu - 1;
				
				schowaj();
				setTimeout("zmienHK()", 500);

			}

			function ustawDMC(nrslajdu)
			{
				DMCstop = false;

				clearTimeout(timer1);
				clearTimeout(timer2);
				numer = nrslajdu - 1;
				
				schowaj();
				setTimeout("zmienDMC()", 500);

			}
			
			function schowaj()
			{
				$("#slider").fadeOut(1000);
			}
		
			function zmienslajd()
			{

				
				numer++; if (numer>5) numer=1;
				
				var plik = "<img src=\"slajdy/slajd" + numer + ".png\" />";
				
				document.getElementById("slider").innerHTML = plik;
				$("#slider").fadeIn(500);
				
				timer1 = setTimeout("zmienslajd()", 7000);
				timer2 = setTimeout("schowaj()", 6000);
			
			}

			function zmienHK()
			{


				numer++; if (numer>6) numer=1;
				
				var plik = "<img src=\"slajdyHK/slajd" + numer + ".png\" />";
				
				document.getElementById("slider").innerHTML = plik;
				$("#slider").fadeIn(500);
				
				timer1 = setTimeout("zmienHK()", 7000);
				timer2 = setTimeout("schowaj()", 6000);
			
			}

			function zmienDMC()
			{

				numer++; if (numer>7) numer=1;
				
				var plik = "<img src=\"slajdyDMC/slajd" + numer + ".png\" />";
				
				document.getElementById("slider").innerHTML = plik;
				$("#slider").fadeIn(500);
				
				timer1 = setTimeout("zmienDMC()", 7000);
				timer2 = setTimeout("schowaj()", 6000);
			
			}