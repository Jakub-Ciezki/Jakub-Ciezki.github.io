function celsjusz() {
    var tempIN = document.getElementById('input').value;
    var tempOUT = (tempIN * 2)+30;

    document.getElementById('out').innerHTML = tempOUT;
}
function fahrenheit() {
    var tempIN = document.getElementById('input').value;
    var tempOUT = (tempIN-30)/2;

    document.getElementById('out').innerHTML = tempOUT;
}