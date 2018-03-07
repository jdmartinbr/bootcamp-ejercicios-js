function maxValue() {
    document.getElementById("result").innerHTML = 'Resultado<br><br>';
    var primero = parseInt(document.getElementById('first').value);
    var segundo = parseInt(document.getElementById('second').value);
    if (isNaN(primero)||isNaN(segundo)) {
        return alert('Inserta sólo números');
    }
    if (primero > segundo) {
        document.getElementById("result").innerHTML += primero;
    } else if (primero < segundo){
        document.getElementById("result").innerHTML += segundo;
    } else {
        document.getElementById("result").innerHTML += 'Ambos números son iguales';
    }
}
